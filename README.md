## Video commenting app
This is the showcase of a core logic of my hobby project - a tool for climbing trainers which allows you to add comments to a video footage from a training session to give high quality feedback to climbers and easily share it with them. 

The biggest challenge for me was to connect the created comments and tie it to a certain time in a video, so when you play a video from start, only relevant comments are shown.

<img width="1059" alt="image" src="https://user-images.githubusercontent.com/59233911/189532172-ee55b5be-7a79-4fb9-90a7-fab3cfe78365.png">

The "editor" page shown in this repo consists of two main parts - video container and the comment timeline. Below I will describe those two parts and the state logic which makes it work.

### Video container
The container has a default state which shows upload form. After uploading a video, other components are rendered.

<img width="538" alt="image" src="https://user-images.githubusercontent.com/59233911/189532630-a482517f-70cf-449d-a277-f13606d454fd.png">

My solution does not place the "dots" in the video directly but in a overlaying container (EditorVideoCommentContainer) so there is no need for video rendering process, which would be slower.

<img width="684" alt="image" src="https://user-images.githubusercontent.com/59233911/189532729-da9fa9fd-e674-412c-b3fc-3fb3b594a415.png">

This overlaying container simply renders the list of comments - "dots", which should be visible only at time when they were created. That is achieved by comparing current videos time and the time of all created comments with this [Recoil selector](https://recoiljs.org/docs/basic-tutorial/selectors/):

<img width="540" alt="image" src="https://user-images.githubusercontent.com/59233911/189533134-34fa0b01-b424-4103-84d6-46a9aea2f82b.png">

The selector call util funciton showComments which returns true if any of saved comment should be visible now. The range constant tells that some comment should be visible half second before and after their created time so it won't just blink on the screen, which would not be noticabale.

<img width="593" alt="image" src="https://user-images.githubusercontent.com/59233911/189533275-18893b41-2b23-4695-8e56-173325302a10.png">

### Comment timeline
This components takes care of creating new comments by showing the input form and list of all created comments, which is dynamically sorted so the currently visible comment in a video container are on the top and highlighted.

<img width="1061" alt="image" src="https://user-images.githubusercontent.com/59233911/189533514-6fa0b9bc-e9c4-4564-bfc7-a010e43a912c.png">

Pressing "Add" stops the video and places another overlay on top of the existing one, which is used for placing the dot to specific location by user. The logic for sorting and highlighting the comments looks like this:

<img width="591" alt="image" src="https://user-images.githubusercontent.com/59233911/189533619-0489cde3-67be-40e1-a664-53131fb7bd40.png">

---
This showcase is far from a usable app. The next challenge here is to create smooth sharing experience such as e.g. [WeTransfer](https://wetransfer.com). Anyway I think that this kind of app has a potentital to help not just climbers but anyone who wants to improve his movement technique at any sport.
