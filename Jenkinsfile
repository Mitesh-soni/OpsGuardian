pipeline {
    agent any

    parameters {
        string(
            name: 'SERVICES',
            defaultValue: '',
            description: 'Comma-separated services (user-service,alert-service,ui)'
        )
    }

    environment {
        TAG = "${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Parse Services') {
            steps {
                script {
                    if (!params.SERVICES?.trim()) {
                        error "SERVICES parameter is empty"
                    }
                    SERVICES = params.SERVICES.split(',').collect { it.trim() }
                    echo "Selected services: ${SERVICES}"
                }
            }
        }

        stage('User Service') {
            when { expression { SERVICES.contains('user-service') } }
            steps {
                sh '''
                  docker build -t opsguardian-user:${TAG} OpsGuardianAPI/user-service
                  kubectl apply -f ~/k8s/deployments/user-service-deployment.yaml
                '''
            }
        }

        stage('Alert Service') {
            when { expression { SERVICES.contains('alert-service') } }
            steps {
                sh '''
                  docker build -t opsguardian-alert:${TAG} OpsGuardianAPI/alert-service
                  kubectl apply -f ~/k8s/deployments/alert-service-deployment.yaml
                '''
            }
        }

        stage('Analytics Service') {
            when { expression { SERVICES.contains('analytics-service') } }
            steps {
                sh '''
                  docker build -t opsguardian-analytics:${TAG} OpsGuardianAPI/analytics-service
                  kubectl apply -f ~/k8s/deployments/analytics-service-deployment.yaml
                '''
            }
        }

        stage('API Gateway') {
            when { expression { SERVICES.contains('api-gateway') } }
            steps {
                sh '''
                  docker build -t opsguardian-gateway:${TAG} OpsGuardianAPI/api-gateway
                  kubectl apply -f ~/k8s/deployments/api-gateway-deployment.yaml
                '''
            }
        }

        stage('UI') {
            when { expression { SERVICES.contains('ui') } }
            steps {
                sh '''
                  docker build -t opsguardian-ui:${TAG} OpsGuardianUI
                  kubectl apply -f ~/k8s/deployments/opsguardian-ui-deployment.yaml
                '''
            }
        }
    }
}

