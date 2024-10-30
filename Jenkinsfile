pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JianYuChentw/my-simple-api.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '/usr/local/bin/npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh '/usr/local/bin/npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-simple-api .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 my-simple-api'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
