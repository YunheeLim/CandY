### 2023_KSW_Fall_Program

### Team HoT

## Project Title

Establishing the Correlation Between Bio-Data and Concentration Level Utilizing EEG Data

## Project Period
 Sep/20/2023 ~ Dec/20/2022 

## Project Content
1. [Collaborator](#collaborator)
2. [Project Overview](#project-overview) 
3. [Research problem statements](#research-problem-statements)
4. [Research novelty](#research-novelty)
5. [Environment Setting](#environment-setting)
6. [Experiment](#experiment)
   <!--   - [File Structure](#file-structure)
    - [Dataset](#dataset)
    - [Requirments](#requirments) -->
   <!--
    - [Result](#result)     
    - [Model Architecture](#mode-architecture) -->

## Collaborator

| Name         | University               | Department                                   | Email               | Contact                        |
| :------------- | :------------------------: | :--------------------------------------------: | :-------------------: | :------------------------------: |
| Seojeong Park    | Hallym University        | Dept. of Computer Science                    | diditjwjd@gmail.com | https://github.com/seojeongP     |
| Seungah Jang  | Jeju National University        | Dept. of Computer Science                    | wkdtmddk6733@gmail.com   | https://github.com/ssaaJang     |
| Jeongmin Seo | Kyunhee University     | Dept. of Computer Information                | balljm@naver.com | https://github.com/jeongmin1217       |
| Yunhui Lim | Kyunhee University     | Dept. of Computer Science and Engineering                | lyhhh0320@gmail.com   | https://github.com/YunheeLim    |
| Byeongsoo Min  | Kyunhee University | Dept. of Computer Science and Engineering       | qud9783@gmail.com   | https://github.com/Byeongsoo-Min  |
| Martin Kim | Purdue University        | Dept. of Polytechnic Institute | 19alswprla@gmail.com    | https://github.com/19alswprla |


## Project Overview

#### Service Architecture
<p align="center">
<img width="500" alt="architecture" src="https://github.com/Healthcare-of-Things/CandY-front/assets/92131041/940893d5-319f-4e06-b7a2-1deb2c91f46e">   
</p>

## Research Problem Statements 

Modern day society has bore witness to a phenomenon of diminished concentration levels and attention spans as a result of dependency and increased usage of smart phones. The usage rate of smartphones is more than 70% of adults in the United States and nearly 50% of adults worldwide. The decline in cognitive ability in daily life due to the increase in smartphone use can be observed. Therefore, the need for methods to facilitate and assist users in maintaining high levels of concentration in their daily lives has increased significantly.

## Research Novelty 
1. This study adopted a wearable device in daily life to measure the concentration level instead of using a specialized EEG sensor.<br>
2. This study set the experimental background as a everyday life.<br>
3. Extracted brainwaves were used as a direct indicator of concentration without Fourier transform.<br>
4. A quantified figure was utilized to analyze a concentration score instead of subjective self-assessment.<br>
5. The correlation between bio-data and concentration is provided with importance and proportionality.
   
## Environment Setting
>### Machine Learning

>### Service
1. Go to https://nodejs.org/en and download Node.js
2. Download the Expo Go app on your phone in App Store or Google Play Store.
3. Follow the command below in your bash.
```bash
npm install --g expo-cli
```
```bash
git clone 
```
```bash
npm start
```
4. Scan the QR code that can be shown on the console with your phone.
<img width="300" alt="app_screen1" src="https://github.com/Healthcare-of-Things/CandY-front/assets/92131041/9978ac60-6f0c-407e-bcf4-a81e08a5153d">
<img width="300" alt="app_screen2" src="https://github.com/Healthcare-of-Things/CandY-front/assets/92131041/debbbae8-c5ab-40c5-8358-0d2b9dfae748">   
<img width="300" alt="app_screen3" src="https://github.com/Healthcare-of-Things/CandY-front/assets/92131041/51bb2af1-a106-413e-bf72-fa83b314d559">   

#### Requirements
```
- npm version 8.1.0
- expo-cli version 6.3.10
```

## File Structure
    📦2023-ksw-fall-program-final-team-hot/
     └📂presentation
      └📜Mid-Presentation-Team-HoT.pptx
      └📜Final-Presentation-Team-Hot.pptx
      └📜demo.mp4
     └📂paper
      └📜paper.pdf
     └📂code
       └📂data_analysis
       └📂frontend
         └📂assets
         └📂components
           └📜CircleProgress.js
           └📜CircularProgress.js
         └📂node_modules
         └📂screens
           └📂Home
             └📜Bluetooth.js
             └📜Home.js
           └📂Main
             └📜Main.js
           └📂OnBoarding
             └📜LaunchScreen.js
             └📜SignInScreen.js
             └📜SignUpScreen.js
           └📂Profile
             └📜Profile.js
           └📂Recommendation
             └📜Recommendation.js
           └📂Record
             └📜Record.js
           └📂Statistics
             └📜DailyStatistics.js
             └📜SessionStatistics.js
             └📜Statistics.js

         └📜App.js
         └📜app.json
         └📜babel.coonfig.js
         └📜package-lock.json
         └📜package.json
         └📜react-native.config.js
         └📜yarn.lock
       └📂backend
     └📜README.md
       

## Experiment

>##### Best Result
|   |Audio|Image|
|---|:-:|:-:
|**Sampling Rate**|16,000 Hz|16,000 Hz|
|**Model**|CNN Layer 3|CNN Layer 3|
|**Feature Extraction**|MFCC|Mel Spectrogram|
|**Accuracy**|0.96|0.93|
|**F1-Score**|0.96|0.93|
|**AUC**|0.9882|0.9753|

>##### Model Architecture

<p align="center">
<img width="1163" alt="Project Overall Architecture" src="https://user-images.githubusercontent.com/101625865/208327334-3429c632-3135-48fb-8b3a-5cf896225ce3.png">
</p>

  Three microphones are connected into raspberry pi. Each microphone records 3 second repeatedly and we put that data into model right away which put in Raspberry pi. Model will predict whether it is coyote or not. If it was coyote, network team transmit the time stamp to the gateway by Lorawan and three different time values of the coyote sound will determine the location of the coyote. And then they visualize the location on the map.


>##### Hyper Parameter for Best Model 

    ✔ Audio
    - Optimization function : Adam optimizer
    - Learning rate : 0.001
    - Batch size : 10
    - Epoch : 30 
    - Sampling rate : 16,000 Hz (MFCC)
    
    ✔ Image
    - Optimization function : Adam optimizer
    - Learning rate : 0.001
    - Batch size : 32
    - Epoch : 30 
    - Sampling rate : 16,000 Hz (Mel Spectrogram)

