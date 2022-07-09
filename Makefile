.PHONY : echo
echo :
	@echo echo

.PHONY : build
build :
	#cd stupid-captcha-template ; git pull ;yarn build
	#cp stupid-captcha-template/dist/widget.min.js client/widget.min.js
	sudo docker build -t medusa .

.PHONY : run
run :
	make build
	sudo docker kill medusa || true
	sudo docker rm medusa || true
	sudo docker run -it --network stupid-net --name medusa medusa

.PHONY : deploy
deploy :
	make build
	sudo docker kill medusa || true
	sudo docker rm medusa || true
	sudo docker run -it --network stupid-net -d --name medusa medusa
