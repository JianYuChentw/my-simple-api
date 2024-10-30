pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"  // 添加 node 的路徑到 PATH
    }

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
        stage('Stop Existing Container') {
            steps {
                // 停止並移除任何使用 3000 端口的容器
                sh 'docker ps -q --filter "ancestor=my-simple-api" | xargs -r docker stop || true'
                sh 'docker ps -a -q --filter "ancestor=my-simple-api" | xargs -r docker rm || true'
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
