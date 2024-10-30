pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // 拉取代碼
                git 'https://github.com/JianYuChentw/my-simple-api.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // 安裝 Node.js 依賴
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // 執行測試
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                // 建構 Docker 映像
                sh 'docker build -t my-simple-api .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // 運行 Docker 容器
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
