pipeline {
    agent any
    
    stages {
        stage('Run Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
