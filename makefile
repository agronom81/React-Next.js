git:
	ssh-add -D
	ssh-add ~/.ssh/id_rsa_agronom
	git add .
	git commit -m "$m"
	git push

