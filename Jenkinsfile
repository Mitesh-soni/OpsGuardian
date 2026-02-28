pipeline {
    agent any

    parameters {
        string(
            name: 'SERVICES',
            description: 'Comma-separated services (example: user-service,notification-service,opsguardian-ui)'
        )
    }

    environment {
        DOCKERHUB_USER = 'nikhilmalviya80'
        K8S_NAMESPACE = 'opsguardian'
    }

    stages {

        stage('Checkout') {
            steps {
                deleteDir()
                git branch: 'develop',
                    url: 'https://github.com/malviyanikhil123/OpsGuardian.git'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Deploy Services') {
            steps {
                script {
                    if (!params.SERVICES?.trim()) {
                        error "SERVICES parameter is required"
                    }

                    def services = params.SERVICES.split(',').collect { it.trim() }

                    for (service in services) {
                        if (service == 'opsguardian-ui') {
                            deployUI()
                        } else {
                            deployAPI(service)
                        }
                    }
                }
            }
        }
    }
}

/* ---------------- FUNCTIONS ---------------- */

def deployAPI(service) {
    echo "🚀 Deploying API service: ${service}"

    dir("OpsGuardianAPI/${service}") {
        sh """
        docker build -t ${DOCKERHUB_USER}/${service}:${BUILD_NUMBER} .
        docker push ${DOCKERHUB_USER}/${service}:${BUILD_NUMBER}
        docker compose up -d ${service}
        """
    }
}

def deployUI() {
    echo "🎨 Deploying UI to Kubernetes"

    dir("OpsGuardianUI") {
        sh """
        docker build -t ${DOCKERHUB_USER}/opsguardian-ui:${BUILD_NUMBER} .
        docker push ${DOCKERHUB_USER}/opsguardian-ui:${BUILD_NUMBER}

        kubectl set image deployment/opsguardian-ui \
          opsguardian-ui=${DOCKERHUB_USER}/opsguardian-ui:${BUILD_NUMBER} \
          -n ${K8S_NAMESPACE}

        kubectl rollout status deployment/opsguardian-ui -n ${K8S_NAMESPACE}
        """
    }
}
