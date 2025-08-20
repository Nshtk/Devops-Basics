## Deployment using dynamic PV

1. k3d cluster create simple-app -p "3000:3000@loadbalancer" -p "5432:5432@loadbalancer" --agents 2
2. docker build -f ./simple-app/Dockerfile -t backend:latest ./simple-app
3. k3d image import backend:latest -c simple-app
4. kubectl apply -f postgres.yaml
5. kubectl apply -f backend.yaml
6. kubectl apply -f frontend.yaml
