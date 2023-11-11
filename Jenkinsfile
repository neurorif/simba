pipeline {
    agent none
    stages {
        stage('Static analysis') {
            agent { 
                docker {
                    image 'node:18.12.1' 
                    args '-u root:root'
                }
            }
            stages {
                stage('Build') {
                    steps {
                        sh 'npm --version'
                        sh 'npm install'
                    }
                }
                stage('Unit test') {
                    steps {
                        sh 'bin/test/unit start'
                    }
                }
                stage('Component test') {
                    steps {
                        sh 'bin/test/component start'
                    }
                }
                stage('E2E test') {
                    steps {
                        sh 'echo todo'
                    }
                }
                stage('Deploy') {
                    steps {
                        sh 'echo todo'
                    }
                }
            }
        }
    }
}
