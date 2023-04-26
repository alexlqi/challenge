# Challenge Alejandro Andrade
## Installation
In order for these containers to work you must install or update docker in your computer

### Cloning the repo
to install everything you have to clone this repo using the following:
```
git clone https://github.com/alexlqi/challenge.git
```
### Create the containers
In order to have access to the solutions you have to turn on the containers
```
docker-compose up -d
```
### Setting up nodejs
in a console run the following commands
```
docker exec -it nodejs_challenge npm install
```
### Setting up python
in a console run the following commands
```
docker exec -it python_challenge pip install -r requirements.txt
```
### Setting up wordpress
First you have to go to [http://localhost:8080](this site) to configure the installation
After finishing the installation, login into [http://localhost:8080/wp-admin](wp-admin)
Then, go to plugins and follow these steps:
1. Hit the button add new and then upload
2. Upload the zip file in the root directory of this project.
3. Activate the plugin from the WordPress admin panel.

## Usage
### Run nodejs app
in a console run the following commands
```
docker exec -it nodejs_challenge npm run start
```
### Run python app
in a console run the following commands
```
docker exec -it python_challenge python data_processing.py
```
### Use wordpress plugin
To display a list of posts filtered by a specific category, use the following shortcode:

```
[my_post_list category="category-slug"]
```

Replace `category-slug` with the slug of the category by which to filter the posts.
For example:
1. Click here to [http://localhost:8080/wp-admin/post.php?post=2&action=edit](edit sample page) or go to [http://localhost:8080/wp-admin/edit.php?post_type=page](/wp-admin/edit.php?post_type=page)
2. Go to the very end of the text and hover the mouse below the blank space and click in the black and white crosshair that appears
3. Browse for shortcode and select shortcode
4. Use the following category: uncategorized
5. Update the page from the button in the top right corner
6. Click the preview button right next to update and the select the option preview in new tab
7. You'll see a list of items of the posts as hyperlinks

