# Python, Data, and LLMs in the Calculus Classroom

February 2025

##  Calculus Python Notebook Labs

Pre-built Python notebooks that allow students to further explore Calculus concepts with Python and real data.
<!-- Labs to help students further explore calculus with Python and integrate data science into the calculus course. They are interactive Jupyter notebooks that allow students experiment, explore concepts, and summarize results. -->
<!-- These labs use Python as an additional tool for integrating data science into calculus and further exploring calculus. They are a collection of interactive Jupyter notebooks intended as a set of labs to accompany a calculus course. Each interactive Jupyter notebook is a "virtual laboratory" where students experiment and explore concepts from calculus and summarize their results.  -->

* [Lab 1: Getting Started with Colab and Python ](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab1-Getting-Started-with-Colab-Python.ipynb)

* [Lab 2: Plotting and Solving Equations](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab2-Plotting-and-Solving-Equations.ipynb)

* [Lab 3: Linear Regression with CO2 Emissions](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab3-Linear-Regression.ipynb)

* [Lab 4: Derivatives with Lake Mead Water Level](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab4-Derivatives-with-Water-Level.ipynb)

* [Lab 5: Symbolic Differentiation and Marginal Cost](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab5-Symbolic-Differentiation-Marginal-Cost.ipynb)

* [Lab 6: Optimization and Finding the Line of Best Fit](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab6-Optimization.ipynb)

* [Lab 7: Definite Integrals and Accumulated Change in Lake Mead Water Level](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab7-Definite-Integrals-and-Accumulated-Change.ipynb)

* [Lab 8: Symbolic Integration and Tracking Change in Position](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Lab8-Symbolic-Integration.ipynb)

* [Quick Reference Guide for Python](https://colab.research.google.com/github/mcwg/calc-python-labs/blob/main/Python-Quick-Reference.ipynb)

All the labs and more info available at [https://github.com/mcwg/calc-python-labs](https://github.com/mcwg/calc-python-labs)

#### How to use them

(Requires a Google account)

<!-- *  Open one of the labs and press the `open in colab` button at the top.  -->
*  Follow each link and you will be able to edit and run all the Python code.
*  Students should save their own copy (using the file menu) to be able to save their work and share it with their instructor.



## LLM + Colab labs

## LLM + Colab Labs  

These labs guide students in using an LLM to generate Python code related to Calculus concepts, which they then execute and modify in Google Colab.

### 📌 Instructions  
Before starting, students should read the [Instructions for students](InstructionsColab-LLM-Labs.pdf) on creating Python notebooks in Colab and using an LLM to generate and execute code.

### 🧪 Sample Labs  

1. **[Intro to LLM + Colab](LabAsst1.pdf)**  
   Students prompt an LLM to generate simple Python code, run it in Colab, and tweak it.

2. **[Riemann Sums: Approximating Definite Integrals](RiemannSumsLeft.pdf)**  
   - Students use Riemann sums to approximate integrals.  
   - Sample Colab notebook: [LLM-generated code](https://colab.research.google.com/drive/1X6BBo_qZ7Cr-XCIsVlHoymoHsRWud6hz).

3. **[Lake Mead Volume Calculation](LakeMeadVolume1.pdf)**  
   - Computes lake volume by integrating cross-sectional areas at different altitudes.  
   - **Follow-up lab**: [FTC Part 2 & Total Volume](LakeMeadVolume2.pdf).  
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

*  [Lake Mead water volume](https://chatgpt.com/share/67a39359-654c-800d-82dc-9a36fca26556) using contour areas by height. Data that was used available [here](2001-LakeMeadContourAreas.csv).
*  [Fitting functions to Glucose data](https://chatgpt.com/share/67a61eae-8a28-800d-8781-ae4515934743)
*  [Integration of lake mead flow rates and the FTC](https://chatgpt.com/share/67a619d4-cdec-800d-933d-0f7b56a10533). Data that was used available [here](lake-mead-rate.csv).
