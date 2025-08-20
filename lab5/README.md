## Deployment

1. ```k3d cluster create mycluster -p "8080:80@loadbalancer" --agents 2```
2. ```kubectl apply -f <https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml>```
3. ```kubectl apply -f app-deployment.yaml```
4. ```kubectl apply -f app-service.yaml```
5. ```kubectl apply -f app-ingress.yaml```
6. <http://localhost:8080>
