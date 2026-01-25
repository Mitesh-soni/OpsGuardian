pipeline {
    agent any

    parameters {
        string(
            name: 'SERVICES',
            description: 'Comma-separated services to deploy (example: user-service,notification-service,opsguardian-ui)'
        )
    }

    environment {
        API_DIR = 'OpsGuardianAPI'
        UI_DIR  = 'OpsGuardianUI'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy Services') {
            steps {
                script {
                    if (!params.SERVICES?.trim()) {
                        error "SERVICES parameter is required"
                    }

                    def services = params.SERVICES
                        .split(',')
                        .collect { it.trim() }

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
    echo "Deploying API service: ${service}"

    dir("OpsGuardianAPI/${service}") {
        sh """
        docker build -t opsguardian/${service}:latest .
        docker compose up -d ${service} || true
        """
    }
}

def deployUI() {
    echo "Deploying UI"

    dir("OpsGuardianUI") {
        sh """
        docker build -t opsguardian/ui:latest .
        docker compose up -d ui || true
        """
    }
}
