# Python, Data, and LLMs in the Calculus Classroom

February 2025

These labs guide students in using an LLM to generate Python code related to Calculus concepts, which they then execute and modify in Google Colab.

###  Instructions  
Before starting, students should read the [Instructions for students](InstructionsColab-LLM-Labs.pdf) on creating Python notebooks in Colab and using an LLM to generate and execute code.

### Sample Labs  

1. **[Intro to LLM + Colab](LabAsst1.pdf)**  
   Students prompt an LLM to generate simple Python code, run it in Colab, and tweak it.

2. **[Riemann Sums: Approximating Definite Integrals](RiemannSumsLeft.pdf)**  
   - Students use Riemann sums to approximate integrals.
   - Sample Colab notebook: [LLM-generated code](https://colab.research.google.com/drive/1X6BBo_qZ7Cr-XCIsVlHoymoHsRWud6hz).

3. **[Lake Mead Volume Calculation](LakeMeadVolume1.pdf)**  
   - Students compute lake volume by integrating cross-sectional areas.  
   - Data file `LakeMeadAreas.csv` needed for the lab available [here](LakeMeadAreas.csv).
   - Sample Colab notebook: [LLM-generated code](https://colab.research.google.com/drive/1cwhIjRmjjlCMvQP04uL4WMR-jq-Lb31-?usp=sharing).

4. **[Follow-up lab: Lake Mead Volume and the FTC Part 2](LakeMeadVolume2.pdf)**  
   - Students compute lake volume at different water levels and plot the volume as a function of the water level.
   - Uses the same data file `LakeMeadAreas.csv` available [here](LakeMeadAreas.csv)
   - Sample Colab notebook: [LLM-generated code](https://colab.research.google.com/drive/1cwhIjRmjjlCMvQP04uL4WMR-jq-Lb31-?usp=sharing).

<!-- 
Labs in which students are instructed to prompt an LLM to produce Python code related to Calculus concepts and then run it and tweak it in Colab.

*  [Instructions for students](InstructionsColab-LLM-Labs.pdf) about creating Python notebooks in Colab and asking an LLM to produce Python code to run in them.

#### Sample labs
*  [1st Lab](LabAsst1.pdf) in which students ask an LLM for simple Python code and run it in Colab.
*  [Riemann sums to approximate a definite integral](RiemannSumsLeft.pdf)
    - Sample [LLM-generated code](https://colab.research.google.com/drive/1X6BBo_qZ7Cr-XCIsVlHoymoHsRWud6hz) (opens un in Google Colab).
*  [Lake Mead volume](LakeMeadVolume1.pdf) by integrating cross dection areas by altitude
    - [Follow-up lab](LakeMeadVolume2.pdf) about FTC part 2 and finding then total volume at each altitude.
    - Sample [LLM generated code](https://colab.research.google.com/drive/1cwhIjRmjjlCMvQP04uL4WMR-jq-Lb31-?usp=sharing) (opens un in Google Colab).
 -->

##  Some interesting sample chatGPT conversations

They illustrate how Calculus-related conversations can look like when the LLM can run Python code by itself (no Google Colab or Python notebooks involved).

*  [Lake Mead water volume](https://chatgpt.com/share/67a39359-654c-800d-82dc-9a36fca26556) using cross-sectional areas. Data that was used available [here](2001-LakeMeadContourAreas.csv).
*  [Fitting functions to Glucose data](https://chatgpt.com/share/67a61eae-8a28-800d-8781-ae4515934743)
*  [Integration of lake mead flow rates and the FTC](https://chatgpt.com/share/67a619d4-cdec-800d-933d-0f7b56a10533). Data that was used available [here](lake-mead-rate.csv).
