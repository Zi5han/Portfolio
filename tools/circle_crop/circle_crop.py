from PIL import Image

def crop_to_circle(png_path, out_path):
    img = Image.open(png_path)
    width, height = img.size
    img = img.convert("RGBA")
    pixels = img.load()
    for x in range(width):
        for y in range(height):
            x_dist_from_center_norm = (width/2 - x) / (width/2);
            y_dist_from_center_norm = (height/2 - y) / (height/2);
            distance_sqr = x_dist_from_center_norm * x_dist_from_center_norm + y_dist_from_center_norm * y_dist_from_center_norm
            if distance_sqr > 1:
                pixels[x, y] = (0, 0, 0, 0)
    img.save(out_path, format="PNG")
    
    

def png_to_ico(png_path, ico_path, sizes=[(16,16), (32,32), (48,48), (64,64), (128,128), (256,256)]):
    img = Image.open(png_path)
    img = img.convert("RGBA")  # Ensure image is editable and has alpha
    img.save(ico_path, format='ICO', sizes=sizes)

crop_to_circle('./input.png', './circle.png')
png_to_ico('./circle.png', './output.ico')