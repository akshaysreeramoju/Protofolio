# Protofolio ⚡️

## A minimal portfolio template for Developers!


## Features

⚡️ One Page Layout\
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\
⚡️ Well organized documentation

---

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- Shows you’re more than just a resume

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## How To Use 

From your command line, first clone Simplefolio:

```bash
# Clone the repository
$ git clone https://github.com/akshaysreeramoju/Protofolio.git

# Move into the repository
$ cd Protofolio

# Remove the current origin repository
$ git remote remove akshay
```

## Template Instructions:

### Step 1 - STRUCTURE

Go to `/login.html` and put your information, there are 5 sections:

### (1) Header div

- On `title`, put your custom portfolio title.

```html
<!-- **** Header div **** -->
 <div id="header">
        <div class="container">
            <nav>
                <img src="" class="logo">
                <ul id="menu">
                    <li><a href="#header" class="kk active-link">Home</a></li>
                    <li><a href="#about" class="kk" >About</a></li>
                    <li><a href="#Portfolio" class="kk" >Portfolio</a></li>
                    <li><a href="#Projects" class="kk" >Projects</a></li>
                    <li><a href="#Contact" class="kk" >Contact</a></li>
                    <i class="fa-solid fa-xmark"  onclick="closemenu()"></i><br>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="container1">
                <div class="no">
                  <h1>Hi, I'm Your Name.</h1>
                  <h3>profession.</h3>
                  <p>brief explanation about the profession.</p>
                  <div class="btn-box">
                     <a href="#about">Let's Talk.</a>
                  </div>
        </div>
    </div>
<!-- /END Header div -->
```

### (2) About div

- On `<img>` tag, fill the property with your profile picture path, your picture must be located inside `/images/` folder.
- On `<p>` tag with class name `tab_conents`, include information about you, I recommend to put 2 paragraphs in order to work well and a maximum of 3 paragraphs.

```html
<!-- **** About div**** -->
  <div  id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="/images/photo.jpeg" alt="hii">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About Me.</h1>
                    <p>.</p>
                  <div class="text"> 
                    <p class="text-links active-link" onclick="opentab('skills')">Skills</p>
                    <p class="text-links" onclick="opentab('experience')">Experience</p>
                    <p class="text-links" onclick="opentab('education')">Education</p>
                  </div>
                  <div class="tabcontents active-tab" id="skills">
                    <ul>
                        <li><span>Web development</span><br>protofolio using Html and Css.</li><br>
                        <li><span>Python</span><br>Project on Data Visualization.</li><br>
                        <li><span>Data Scientist</span><br>Projects on Data Analysis.</li><br>
                    </ul>
                  </div>
                
                <div class="tabcontents" id="experience">
              </div>
                  <div class="tabcontents" id="education" style="margin: 10px 0;">
                    <ul>
                        <li><span>2018</span><br>Jnhs high school / 8.5</li><br>
                        <li><span>2020</span><br>Narayana Junior College / 94%</li><br>
                        <li><span>2024</span><br>Vaagdevi Engineering College / 6.7</li><br>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
<!-- /END About div -->
```

### (3) Projects div

- Each project lives inside a `div`.
- On `<h2>` ,include your project title.
- On `<img>` tag, fill the property with your Projects picture path, your picture must be located inside `/images/` folder.
- On `<p>` , include your project description.
- On first `<a>` tag, put your project url on `href` property.
- On second `<a>` tag, put your project repository url on `href` property.

```html
<!-- ****Projects div **** -->
 <div  id="Projects">
        <div class="container">
            <h1 class="sub-title">Projects.</h1>
            <div class="project-list">
                <div><a href="">
                    <i class="fa-solid fa-code"></i>
                    <h2>Portfolio.</h2>
                    <p>This is a simple protofolio made by usng Html and Css.</p>
                <br><a href="">Learn more</a>
                </div></a>
                <div><a href="https://github.com/akshaysreeramoju/Data-Visualization-on-Covid_19">
                    <i class="fa-solid fa-chart-simple"></i>
                    <h2>Data visualization.</h2>
                    <p>Data Visualization project is done on Covid_19.</p>
                    <br><a href="https://github.com/akshaysreeramoju/Data-Visualization-on-Covid_19">Learn more</a>
                </div></a>
            <div><a>
                <i class="fa-solid fa-chart-simple"></i>
                <h2>Data Analysis.</h2>
                <p>This project is analyzed on Doctor Visit.</p>
                <br><a href="#">Learn more</a>
            </div></a>
        </div>
   </div>
        <br>
<!-- /END Projects div -->


### (3) Protofolio div

- Each work lives inside a `div`.
- On `<h3>` ,include your project title.
- On `<p>` , include your project description.
- On first `<a>` tag, put your project url on `href` property.
- On second `<a>` tag, put your project repository url on `href` property.

<!-- **** Protofolio div **** -->
<div  id="Portfolio">
            <div class="container">
                <h1 class="sub-title">My Work</h1>
                <div class="work-list">
                <div class="work">
                    <img src="/images/work.jpeg">
                    <div class="layer">
                        <h3>Data Visualization</h3>
                        <p>This web app describe my skills and talents on Data Visualization.</p>
                        <a href="https://github.com/akshaysreeramoju/Data-Visualization-on-Covid_19"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="/images/work-2.png">
                    <div class="layer">
                        <h3> Protofolio</h3>
                        <p>This web app describe my skills and talents on Html and Css.</p>
                        <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="/images/work-3.jpeg">
                    <div class="layer">
                        <h3>Data Analysis</h3>
                        <p>This web app describe my skills and talents on Data Analysis.</p>
                        <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
               </div>
               <a href="#Projects" class="btn">See More</a>
           </div>
    </div>
<!-- /END Protofolio div -->



### (4) Contact Section

- On `<p>` , include some custom mail,id and phone numbers.
- On `<a>` tag, put your email address on `href` property.
- On `<div>` of class `contact-right`,include a contact Form.
```html
<!-- **** Contact Section **** -->
  <div  id="Contact">
            <div class="container">
                <div class="row">
                  <div class="contact-left">
                      <h1 class="sub-title">Contact Me</h1>
                      <p><i class="fa-solid fa-paper-plane"></i>your mail@gmail.com</p>
                      <p><i class="fa-sharp fa-solid fa-phone"></i>+91xxxxxxxx</p>
                     <div class="icon">
                          <a href="https://www.linkedin.com/in/akshay-sreeramoju-73b5b7260/"><i class="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i class="fa-brands fa-instagram"></i></a>
                          <a href="https://mail.google.com/mail/#inbox?compose=sreeramojuakshay"><i class="fa-regular fa-envelope"></i></a>
                     </div>
                   </div>
                 <div class="contact-right">
                      <form>
                         <input type="text" name="Name" placeholder="Your Name" required>
                         <input type="email" name="email" placeholder="Your Email" required>
                         <textarea name="Message" rows="6" column="10" placeholder="Your Message"></textarea>
                         <button type="submit" class="btn-btn2">Submit</button>
                      </form>
                  </div>
                </div>
            </div>
    </div>
<!-- /END Contact div -->

