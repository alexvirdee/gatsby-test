---
path: Create a time-lapse with Blender
date: 2019-05-25T04:00:00.000Z
title: Create a time-lapse with Blender
description: A tutorial using Blender animation software
---
TL;DR



The goal of this post is to simplify the process of creating a time-lapse with Blender - A complex piece of software normally used to create 3D animations.



Blender can also be used to edit videos but it does take some effort to learn how to use. Once you get familiar with the program it is actually intuitive. We will go into the steps on how to render with Blender. I want to help others not waste time as I initially did while trying to make a time-lapse video. I'm sure there are people out there who may find this post useful, if trying to learn the video editing portion of the software. Blender is a completely free & open source that is really interesting to learn.



The Art of Time-lapse



Before we get into the tutorial i'd like to discuss time-lapse photography in general. I believe it is safe to say that all video is fundamentally just images and sound combined to form what we see on the screen as moving film in a frame rate that the human eye would not be able to distinguish the individual frames.



Time-lapse video is no different but instead you are taking pictures at set intervals and then stitching them together post-processing for visually epic videos of nature or city scenes. The thing with time-lapse is that the setting can take place over a period of time from anywhere from a few hours, to months of photography taking thousands of photos (good luck to your CPU) and stitching them together in a video editing program. A good example for a time-lapse would be a construction project in which the building developers want to see the whole progress of the site in video upon completion, or maybe the growth of a plant from seed to sprouting.



I've always been interested in photography using a Nikon D300 to take pictures of mostly cars getting rolling shots in which the wheels spin and the background blurred while the car is highly in-focus. Lately, I have been fascinated with time-lapse and have been watching them on YouTube. And so with my photography interests in mind and an old GoPro Hero 4 that I haven't used in a while, I went ahead and made a time-lapse scene and rendered it out with Blender.



https://youtu.be/AHrCI9eSJGQ

An incredible example of time-lapse

Why Blender?



In a previous post I discussed about using my old mining computer as a daily desktop machine. Unfortunately, with Ubuntu installed it seems there really isn't an easy video editor that comes with it as is the case with Mac and Windows. After doing some research I came across Blender and installed it on my machine. As Google states - "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, interactive 3D applications and video games. Wikipedia".



Initially trying out the program I felt like I was in open waters and had no idea how to even get into the video editor portion of the program (initially it opens up to a 3D cube with XYZ axis displayed). Blender is certainly complex and is not beginner friendly at all. To be frank, if you are using Blender for editing video you may be discouraged as there really aren't many tutorials on YouTube or anywhere that really help; or at least I couldn't find any so I had to do the learning on my own hence why I am making this post to help others. Most of the tutorials online are on creating actual 3D animations, and now I'm actually learning a bit of 3D & it's a lot of fun so far. I've only made a donut with radioactive goo on top but hey you have to start somewhere.







My donut animation in the making





\#Art



With that out of the way let's learn how to do some simple video editing within Blender.



Let's get started



I'll assume if you're here you have probably downloaded and installed the program so let's open it up & head over to the video editing portion of the program.







Default program animation editor





Next to default editor head to video editor



Next up, let's get our sequence of images into the editor click on the add button on the bottom left corner of the program









If you hit the key 'A' in the directory you are in it will select/deselect all of the images









Alright perfect, we should now have our image strip in our project and we can now change the settings to match how our pictures were taken to render the best possible video. Initially I didn't have these settings correct and the output was a video with a lot of noise... very frustrating. Head over to the properties section of the application so we can change some of the settings.









Display: hit the drop-down & click on 'Keep UI'. This will keep the interface as is & stop any potential side effects from happening.



Dimensions: It is very important you set the dimensions correctly or else the program is going to try to render at your specified dimensions which may be different from how your camera took the photos.



If you aren't sure of the dimensions your camera took, either check your camera or better option would be just to open one of your photos and check the properties of the photo. This will be the correct dimensions to render your project.







Photo properties + dimensions



Set the end frame to the last photo, the default should be at 250 & for my small example time-lapse i'll be rendering here the final frame is at 999. And 24 FPS should be fine for our purposes.



Output: Click on the first input & set the destination for the video where you want it rendered to on your machine. I'll just the desktop for this example. Click on cache result and set the file format - we'll be using FFmpeg_video



Encoding: Instead of Matroska (just another container for storing files) we'll use MPEG-4. For the codec set it to MPEG-4 (divx). Lossless quality & at medium speed



& that should do it! If you go back up to the render section of properties you can click on 'Animation' & it will create your video. If you're only using a cpu this may take a bit so be patient. For gpu rendering continue reading to see how to set that up.



Setup for GPU Rendering



If you happen to have GPUs on your machine you can utilize them in Blender by changing some of the settings. Head over to File ----> User preferences ----> System ----> Cycles Compute Device ----> \[Your Gpu(s) should be listed here]



A Rendered Time-lapse



Hope you enjoyed this post & may have found it helpful. Here is a time-lapse I created, if you need any extra help feel free to contact me with any issues or problems. Also, if you're interested in learning some 3D animations you should definitely give the tutorials over at https://www.blenderguru.com/ a try.







https://www.youtube.com/watch?v=a7aZg_IPcTM

Blender rendered time-lapse!
