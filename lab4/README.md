## Deployment
1. ```kubectl create configmap nginx-content --from-file=./nginx-content/index.html```

2. ```kubectl apply -f nginx-deployment.yaml```

3. ```kubectl apply -f nginx-service.yaml```

4. ```minikube service nginx-service --url```
