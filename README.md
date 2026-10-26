# CI/CD Pipeline with GitHub Actions, Docker & KIND Kubernetes

## 📌 Project Overview

This project demonstrates an automated CI/CD pipeline using GitHub Actions, Docker, Docker Hub, and KIND (Kubernetes in Docker).

The application is built using Node.js and Express. GitHub Actions automatically runs tests and builds a Docker image whenever code is pushed to the configured branches.

The Docker image is published to Docker Hub and deployed to a local Kubernetes cluster using KIND.

## 🎯 Objectives

- Automate application testing using GitHub Actions.
- Build a Docker image for the Node.js application.
- Push the Docker image to Docker Hub.
- Deploy the containerized application on a KIND Kubernetes cluster.
- Verify application health using HTTP endpoints.

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — Web application framework
- **Git & GitHub** — Version control and source code hosting
- **GitHub Actions** — CI/CD automation
- **Docker** — Containerization
- **Docker Hub** — Container image registry
- **KIND** — Local Kubernetes cluster
- **Kubernetes** — Container orchestration

## 🏗️ Project Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions Workflow
    |
    +--> Install Dependencies
    |
    +--> Run Automated Tests
    |
    +--> Build Docker Image
    |
    +--> Push Image to Docker Hub
                 |
                 v
          Docker Hub Registry
                 |
                 v
          KIND Kubernetes
                 |
                 v
          Deployment and Pod
                 |
                 v
          Kubernetes Service
                 |
                 v
          Node.js Application
```

## 📂 Project Structure

```text
CI-CD-KIND-Project/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── src/
│   ├── app.js
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── k8s-deployment.yml
├── k8s-service.yml
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Application Endpoints

The application provides two HTTP endpoints:

| Endpoint | Description | Expected Response |
|---|---|---|
| `/` | Project information | Application status and project details |
| `/health` | Health check | `{"status":"OK"}` |

## 🚀 CI/CD Workflow

The GitHub Actions workflow performs the following steps:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm ci`.
4. Runs automated tests using `npm test`.
5. Builds the Docker image.
6. Authenticates with Docker Hub using GitHub repository secrets.
7. Pushes the Docker image to Docker Hub.

The workflow is configured to run on pushes and pull requests targeting the configured `main` and `master` branches.

## 🐳 Docker Image

**Docker Hub repository:**  
https://hub.docker.com/r/adityadev02/cicd-kind-app

The image is built and published by the CI/CD workflow.

Image reference:

```text
adityadev02/cicd-kind-app:latest
```

## ☸️ Kubernetes Deployment

The application is deployed to a local KIND cluster.

### 1. Check the cluster

```bash
kind get clusters
kubectl get nodes
```

### 2. Deploy the application

```bash
kubectl apply -f k8s-deployment.yml
kubectl apply -f k8s-service.yml
```

### 3. Verify the resources

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

### 4. Access the application

Run port forwarding:

```bash
kubectl port-forward service/cicd-kind-app-service 3000:3000
```

Keep the terminal running and open these URLs in your browser:

- Application: http://localhost:3000/
- Health check: http://localhost:3000/health

## 🧪 Testing

Automated tests are implemented using Node.js's built-in test runner and `node:assert/strict`.

Run the tests locally:

```bash
npm test
```

The tests verify the health endpoint and the application's root endpoint.

## 📸 Project Evidence

The following evidence can be added to the repository:

- Successful GitHub Actions workflow run.
- Docker Hub repository showing the published image and tags.
- Kubernetes Pod status showing `Running` and `Ready`.
- Browser screenshot of the application root endpoint.
- Browser screenshot of the health endpoint.

## ✅ Results

The GitHub Actions workflow completed successfully, and the automated tests passed. The Docker image was published to Docker Hub and successfully pulled into the KIND Kubernetes cluster.

The Kubernetes Pod reached the `Running` and `Ready` states. Both the root endpoint and `/health` endpoint returned successful responses in the browser.

## 🎓 Learning Outcomes

- Understanding CI/CD pipeline automation.
- Automating tests and Docker image builds.
- Publishing container images to Docker Hub.
- Deploying applications using Kubernetes.
- Verifying application health in a local Kubernetes environment.

## 👨‍💻 Author

**Aditya Dutta**

GitHub: https://github.com/Aditya-Cyb

## 📄 License

This project was created for educational and internship learning purposes.
