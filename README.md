# Challenge Alejandro Andrade
## Installation
In order for these containers to work you must install or update docker in your computer

### Cloning the repo
to install everything you have to clone this repo using the following:
```
git clone https://github.com/alexlqi/challenge.git
```
### setting up nodejs
in a console run the following commands
```
docker exec -it nodejs_challenge npm install
```
### setting up python
in a console run the following commands
```
docker exec -it python_challenge pip install -r requirements.txt
```
### setting up wordpress
First you have to go to (this site)[localhost:8080/] to configure the installation
After finishing the installation, login into (wp-admin)[localhost:8080/wp-admin]
Then, go to plugins and follow these steps:
1. Hit the button add new and then upload
2. Upload the zip file in the root directory of this project.
3. Activate the plugin from the WordPress admin panel.

## Usage
### run nodejs app
in a console run the following commands
```
docker exec -it nodejs_challenge npm run start
```
### run python app
in a console run the following commands
```
docker exec -it python_challenge python data_procesing.py
```
### use wordpress plugin
To display a list of posts filtered by a specific category, use the following shortcode:

```
[my_post_list category="category-slug"]
```

Replace `category-slug` with the slug of the category by which to filter the posts.
