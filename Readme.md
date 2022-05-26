# Formazione Docker & Kubernetes : Hands-on
## Requisiti
- Git, ovviamente
- [Docker Desktop](https://www.docker.com/get-started)
- [K3D](https://k3d.io/#installation)

## Scaletta
1. Riassunto (scaletta)
2. Problemi che andiamo a risolvere
3. Docker
	1. Ambiente
	2. Immagini
	3. Container
	4. Parallelo C-I
	5. Registry
	6. Hands-on
		1. Creazione immagine docker 
		2. Esecuzione immagine locale
		3. Esecuzione immagine remota
		4. Configurazione immagine
		6. Configurazione rete 
		5. Configurazione volumi
		7. Debugging immagine
4. Kubernetes
	1. Ambiente
	2. Kind
	3. Pod
	4. Deployment
	5. Servizi
	6. Volumi
	7. Configurazione


## Comandi

### Docker

``` docker
docker run nginx -p 8080:80
```

``` docker
node .
```

``` docker
docker build -t simpleapp .
```

``` docker
docker run simpleapp --name simpleapp
```

``` docker
docker stop simpleapp
```

``` docker
docker run simpleapp --name simpleapp -p 8080:3030
```

``` docker
docker run simpleapp --name simpleapp -p 8080:3030 -e MESSAGE="Messaggio da Docker!"
```

``` docker
docker run simpleapp --name simpleapp -p 8080:3030 -e MESSAGE="Messaggio da Docker!" -v "PATH\Docker\volumes:/public/test"
```

``` docker
docker exec -it simpleapp /bin/bash
```

### Kubernetes

``` bash
k3d cluster create -p "8081:30080@agent[0]" --agents 1 --registry-create
```

