pipeline {
    agent any
    tools {nodejs "node"}
    environment {
            CI = ''
    }
    stages {
        stage('Build') {
            steps {
                git branch: 'main', url:'https://github.com/mikamtst/challenge-react.git'
                sh "yarn build"
            }
        }
        stage('Approve') {
            steps {
                script {
                    timeout(time: 2, unit: "HOURS") {
                        env.userInput = input message: 'Aprovar o Deploy', ok: 'Continuar',
                            parameters: [choice(name: 'APPROVE_DEPLOY', choices: 'Sim\nNão', description: 'O deploy será aprovado?')]
                        echo ("${userInput}")
                        if ("${userInput}" == 'Sim') {
                            echo 'O Deploy será realizado'
                        } else {
                            echo 'O Deploy NÃO será realizado'
                        }
                    }
                }
            }
        }
        stage("Deploy"){
            steps{
                script{
                    if ("${userInput}" == "Sim"){
                        sh "chmod +x -R ${env.WORKSPACE}"
                        sh './jenkins/scripts/deliver.sh'
                        input message: 'Terminou de utilizar o website? (Clique em "Proceed" para continuar)'
                        sh './jenkins/scripts/kill.sh'
                    } else {
                        echo 'O Deploy foi negado.'
                    }
                }
            }
        }
    }
}
