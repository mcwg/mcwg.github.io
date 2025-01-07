var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "subsection-1",
  "level": "1",
  "url": "subsection-1.html",
  "type": "Subsection",
  "number": "1",
  "title": "Consortium members’ contact info",
  "body": " Consortium members' contact info  The following link will only work if you are logged into github with your browser (login here and return to this site).   Consortium members' contact info   "
},
{
  "id": "BasicSetup",
  "level": "1",
  "url": "BasicSetup.html",
  "type": "Section",
  "number": "1.1",
  "title": "Getting things running",
  "body": " Getting things running  These instructions assume that you have a MacOS computer running MacOS Mojave (10.15 year 2019-2020) or later.    Create a calc folder under your user folder (e.g. if your user folder is elliot then create \/Users\/elliot\/calc . Then cd into calc in the terminal.    (in the terminal and at your calc folder.) Checkout SCRIPTS using git with the following command git clone https:\/\/github.com\/mcwg\/SCRIPTS.git      Tell ASTeX to use stix fonts by running in the terminal (hit enter between lines) cd calc\/SCRIPTS\/ASTeX cp fancierfontdef.tex localfontdef.tex     Make symbolic links work (this is what makes all terminal commands like supertex and mergelabels behave as expected): In the same directory ( calc\/SCRIPTS\/ASTeX ), make a file called localhomedirdef.tex and its contents should be the line: \\def\\homedir{\/Users\/elliot\/calc} (but replace \"elliot\" by your username - use the pwd command to see it in terminal)    Then cd ..\/SETUP so that you go back to the SCRIPTS\/setup folder and run (hit enter between lines) cp alias ~\/.alias cp bash_profile ~\/.bash_profile cp bashrc ~\/.bashrc     If on MacOS Catalina 10.15 or later, you will need to tell MacOS the default shell is bash and not zhs. To change it run chsh -s \/bin\/bash   (if the terminal complains that you don't have permission to do this, use sudo chsh -s \/bin\/bash instead, and provide your computer password when asked.)    Close the Terminal window and reopen it for all changes to have effect.    Install MacTeX 2020 by downloading the installer from this site (download the MacTeX.pkg installer package in the 2020 folder). Note: newer versions of MacTeX will not work!    Install Homebrew from the terminal using instructions at .  Then make sure you homebrew installation is reachable by adding the following files to your .bash_profile file: # Set PATH, MANPATH, etc., for Homebrew. eval \"$(\/opt\/homebrew\/bin\/brew shellenv)\"   Close the Terminal window and reopen it for all changes to have effect.    Install Python using homebrew with pyenv from the terminal run (hit enter between lines) brew install pyenv pyenv install 3.10 pyenv global 3.10   Then add the following lines to your .bash_profile file: # pyenv setup export PYENV_ROOT=\"$HOME\/.pyenv\" command -v pyenv >\/dev\/null || export PATH=\"$PYENV_ROOT\/bin:$PATH\" eval \"$(pyenv init -)\"   Close the Terminal window and reopen it for all changes to have effect.    Install ruby from the terminal using brew install ruby     Install imagemagick from the terminal using brew install imagemagick     "
},
{
  "id": "GhostcriptConflitingVersions",
  "level": "1",
  "url": "GhostcriptConflitingVersions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Supertex is giving me an error message regarding Ghostscript <code class=\"code-inline tex2jax_ignore\">Can't find initialization file gs_init.ps<\/code>",
  "body": " Supertex is giving me an error message regarding Ghostscript Can't find initialization file gs_init.ps  This error seems to come up when there are two different versions of Ghostscript installed in your system (one from MacTex and one from Homebrew). Make sure you have followed all the instructions in Getting things running . If issue remains, run the following in the terminal: brew link --overwrite ghostscript   If running the command gives an error like  Error: Could not symlink share\/doc\/ghostscript\/9.53.3 \/usr\/local\/share\/doc\/ghostscript is not writable.  then run the following command (make sure you adjust the directory which you are being told is not writable - in this example \/usr\/local\/share\/doc\/ghostscript )  sudo chown -R `whoami` \/usr\/local\/share\/doc\/ghostscript  (it will ask for your computer user password). Then try again with brew link --overwrite ghostscript . If command succeeds this time, then Supertex should stop complaining about Ghostscript.  "
},
{
  "id": "SupertexAndMacOSMonterrey",
  "level": "1",
  "url": "SupertexAndMacOSMonterrey.html",
  "type": "Section",
  "number": "1.3",
  "title": "Supertex is not working after I updated to MacOS Monterrey (October 2021)",
  "body": " Supertex is not working after I updated to MacOS Monterrey (October 2021)  This is due to changes in the python version that MacOS Monterrey ships with. One must tell MacOS to fall back to an older python version. Steps below:    Install pyenv and make it load the right version of Python for Supertex: brew install pyenv pyenv install 2.7.18 pyenv global 2.7.18 # bad idea if you use python3 but i don't     Then tell your terminal to know where to look for Python. In .zshenv if you use zsh, or in .profile if you use bash, add the following line at the end of the file (change eric to your user). export PATH=\"\/Users\/eric\/.pyenv\/shims:${PATH}\"     Check this worked by restarting your terminal and running python --version (you should get Python 2.7.18 )     Note: Elliot reports that he needed to install command line tools and xcode for all of this to work.  "
},
{
  "id": "chapter-2",
  "level": "1",
  "url": "chapter-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "Using git",
  "body": " Using git  Visit the following link while collectively build this section. Once a complete draft is created, it will be moved here.   DRAFT: Everything git related (for authors).   "
},
{
  "id": "abbreviationStandarUnits01",
  "level": "1",
  "url": "abbreviationStandarUnits01.html",
  "type": "Section",
  "number": "3.1",
  "title": "What are the abbreviations and conventions that we use for standard units like grams and miles per hour?",
  "body": " What are the abbreviations and conventions that we use for standard units like grams and miles per hour?  We do not use periods, and most units are lower case, even those that are derived from people's names, like hertz. However, Cartesian is an exception.      Replace this    With this     feet  ft    inches  in    centimeters  cm    pounds  lb    grams  gm    seconds  sec    gallons  gal    miles per hour  mph    feet per second  ft\/sec    kilometers per hour  km\/hr    decibel  dB    ante meridian  am    post meridian  pm    United State  US      We try to avoid abbreviating \"liters\". Also, we leave a space between the numeral and the unit, so we write 20 ft, not 20ft.  "
},
{
  "id": "table-1",
  "level": "2",
  "url": "abbreviationStandarUnits01.html#table-1",
  "type": "Table",
  "number": "3.1.1",
  "title": "",
  "body": "    Replace this    With this     feet  ft    inches  in    centimeters  cm    pounds  lb    grams  gm    seconds  sec    gallons  gal    miles per hour  mph    feet per second  ft\/sec    kilometers per hour  km\/hr    decibel  dB    ante meridian  am    post meridian  pm    United State  US    "
},
{
  "id": "latinAbbreviations01",
  "level": "1",
  "url": "latinAbbreviations01.html",
  "type": "Section",
  "number": "3.2",
  "title": "Do we italicize Latin abbreviations such as e.g. and i.e.?",
  "body": " Do we italicize Latin abbreviations such as e.g. and i.e.?  No, we leave them in plain text. Also, we do not include any spaces, so e.g. and i.e. are correct, while e. g. and i. e. are not. However, we use \"for example\"\" and \"that is\" rather than e.g. and i.e.  "
},
{
  "id": "texCommandsAbbreviation01",
  "level": "1",
  "url": "texCommandsAbbreviation01.html",
  "type": "Section",
  "number": "3.3",
  "title": "Which TeX commands can I abbreviate?",
  "body": " Which TeX commands can I abbreviate?  We have created a number of macros that abbreviate commonly used TeX commands.      Replace this    With this     \\begin{enumerate}  \\bb    \\item  \\ii    \\end{enumerate}  \\ee    \\displaystyle  \\dsty    \\rightarrow  \\to    \\begin{eqnarray*}  \\beq    \\end{eqnarray*}  \\eeq     Figure~\\ref{blah}   \\fref{blah}     Table~\\ref{blah}   \\tref{blah}     Problem~\\ref{blah}   \\qref{blah}    Page~\\pageref{blah}  \\pref{blah}    \\Delta  \\D     "
},
{
  "id": "table-2",
  "level": "2",
  "url": "texCommandsAbbreviation01.html#table-2",
  "type": "Table",
  "number": "3.3.1",
  "title": "",
  "body": "    Replace this    With this     \\begin{enumerate}  \\bb    \\item  \\ii    \\end{enumerate}  \\ee    \\displaystyle  \\dsty    \\rightarrow  \\to    \\begin{eqnarray*}  \\beq    \\end{eqnarray*}  \\eeq     Figure~\\ref{blah}   \\fref{blah}     Table~\\ref{blah}   \\tref{blah}     Problem~\\ref{blah}   \\qref{blah}    Page~\\pageref{blah}  \\pref{blah}    \\Delta  \\D    "
},
{
  "id": "latestEditions",
  "level": "1",
  "url": "latestEditions.html",
  "type": "Section",
  "number": "4.1",
  "title": "What are the latest editions of our books?",
  "body": " What are the latest editions of our books?      Book    Edition    Link     Algebra  2nd   Link at Wiley site     Precalc  6th   Link at Wiley site     Applied  6th   Link at Wiley site     Single  8th   Link at Wiley site     Multi  8th   Link at Wiley site      "
},
{
  "id": "table-3",
  "level": "2",
  "url": "latestEditions.html#table-3",
  "type": "Table",
  "number": "4.1.1",
  "title": "",
  "body": "    Book    Edition    Link     Algebra  2nd   Link at Wiley site     Precalc  6th   Link at Wiley site     Applied  6th   Link at Wiley site     Single  8th   Link at Wiley site     Multi  8th   Link at Wiley site     "
},
{
  "id": "rewriteVsCheckMaterials01",
  "level": "1",
  "url": "rewriteVsCheckMaterials01.html",
  "type": "Section",
  "number": "4.2",
  "title": "Sometimes I’m asked to rewrite materials, and sometimes I’m asked to check them.  What is the difference?",
  "body": " Sometimes I'm asked to rewrite materials, and sometimes I'm asked to check them. What is the difference?  Rewriting means reorganizing or rewording the materials. Usually only one person is asked to rewrite something at a time.  Checking means checking that everything is factually correct. This includes checking that:    Each step is mathematically correct. (People do get the right answer and still make mistakes along the way.)    Each variable or quantity is defined unambiguously.    Each figure is correct and consistent with its location and description in the text, including labels and units. (This is particularly important if a figure from one section has been duplicated for use in another. Inappropriate remnants of its previous life may still remain.)    The solutions to exercises and problems    use the same notation and language as the text.    use a method that has been covered at that stage in the text.      All statements are correct, including not only statements about what is where in the rest of the book, but also whether it is in the book.    The situation described in a problem is accurate.    The CCHE Styles and Conventions are followed.    The words that a spell checker misses are used correctly. For example, \"Please bare with me\" and \"Please bear with me\" both pass a spell checker, but do not usually mean the same, even for us older folk!    In other words: Checking means check that whatever is said is correct. Checking means double check everything. However, checking does not involve reorganizing or rewording the manuscript.  Usually lots of people are asked to check the same materials simultaneously. It is almost impossible for one person to find all the mistakes, inconsistencies, and ambiguities.  "
},
{
  "id": "captionsOnATable02",
  "level": "1",
  "url": "captionsOnATable02.html",
  "type": "Section",
  "number": "5.1",
  "title": "Should I put a caption on a table?",
  "body": " Should I put a caption on a table?   Follow this link   "
},
{
  "id": "tableLabels04",
  "level": "1",
  "url": "tableLabels04.html",
  "type": "Section",
  "number": "5.2",
  "title": "When do I put labels (numbers) and captions on tables?",
  "body": " When do I put labels (numbers) and captions on tables?   Follow this link   "
},
{
  "id": "CaptionOrNoCaption03",
  "level": "1",
  "url": "CaptionOrNoCaption03.html",
  "type": "Section",
  "number": "5.3",
  "title": "Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?",
  "body": " Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?   Follow this link   "
},
{
  "id": "creatingChapter03",
  "level": "1",
  "url": "creatingChapter03.html",
  "type": "Section",
  "number": "6.1",
  "title": "How do I create a Chapter?",
  "body": " How do I create a Chapter?   Follow this link   "
},
{
  "id": "exampleInChapter02",
  "level": "1",
  "url": "exampleInChapter02.html",
  "type": "Section",
  "number": "6.2",
  "title": "How do I put an Example in a Chapter?",
  "body": " How do I put an Example in a Chapter?   Follow this link   "
},
{
  "id": "capitalizingHeadings04",
  "level": "1",
  "url": "capitalizingHeadings04.html",
  "type": "Section",
  "number": "6.3",
  "title": "What is the convention for capitalizing headings of chapters, sections, and subsections?",
  "body": " What is the convention for capitalizing headings of chapters, sections, and subsections?   Follow this link   "
},
{
  "id": "mathematicalSymbolsInHeadings03",
  "level": "1",
  "url": "mathematicalSymbolsInHeadings03.html",
  "type": "Section",
  "number": "7.1",
  "title": "I am trying to create tables where the headings are mathematical symbols, e.g. <code class=\"code-inline tex2jax_ignore\">$\\times 2$ & $+4$ & $\\div 2$<\/code>.  The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol.  Any suggestions?",
  "body": " I am trying to create tables where the headings are mathematical symbols, e.g. $\\times 2$ & $+4$ & $\\div 2$ . The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol. Any suggestions?   Follow this link   "
},
{
  "id": "printSpecialCharacters03",
  "level": "1",
  "url": "printSpecialCharacters03.html",
  "type": "Section",
  "number": "7.2",
  "title": "How do I print the TeX special characters: <code class=\"code-inline tex2jax_ignore\">$, &, %, #, _,{, and }<\/code>?",
  "body": " How do I print the TeX special characters: $, &, %, #, _,{, and } ?   Follow this link   "
},
{
  "id": "commandsToGetDivGradCurl03",
  "level": "1",
  "url": "commandsToGetDivGradCurl03.html",
  "type": "Section",
  "number": "7.3",
  "title": "What commands do I use to get <em class=\"emphasis\">div<\/em>, <em class=\"emphasis\">grad<\/em>, and <em class=\"emphasis\">curl<\/em>?",
  "body": " What commands do I use to get div , grad , and curl ?   Follow this link   "
},
{
  "id": "poundSymbol03",
  "level": "1",
  "url": "poundSymbol03.html",
  "type": "Section",
  "number": "7.4",
  "title": "How do I enter the UK counterpart of $, namely the UK pound symbol, £?",
  "body": " How do I enter the UK counterpart of $, namely the UK pound symbol, £?   Follow this link   "
},
{
  "id": "rewriteVsCheckMaterials02",
  "level": "1",
  "url": "rewriteVsCheckMaterials02.html",
  "type": "Section",
  "number": "8.1",
  "title": "Sometimes I’m asked to rewrite materials, and sometimes I’m asked to check them.  What is the difference?",
  "body": " Sometimes I'm asked to rewrite materials, and sometimes I'm asked to check them. What is the difference?   Follow this link   "
},
{
  "id": "answersOrShortAnswersMissing03",
  "level": "1",
  "url": "answersOrShortAnswersMissing03.html",
  "type": "Section",
  "number": "8.2",
  "title": "When checking exercises, what do I do if an Answer or ShortAnswer is missing?",
  "body": " When checking exercises, what do I do if an Answer or ShortAnswer is missing?   Follow this link   "
},
{
  "id": "ConcepTestFiles",
  "level": "1",
  "url": "ConcepTestFiles.html",
  "type": "Section",
  "number": "9.1",
  "title": "What is the correct naming convention for ConcepTest files?",
  "body": " What is the correct naming convention for ConcepTest files?  It follows the same convention as naming exercise files, see The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do? , except \"np\" (new problem), is replaced with \"ctp\" (ConcepTest problem). For example, 1-2dsltctp3.tex would be the filename for Chapter 1, Section 2 (1-2), created by me (dsl), for the Single\/Multi 4th edition (t), containing ConcepTest problem number 3 (ctp3).  "
},
{
  "id": "commentAfterSolution",
  "level": "1",
  "url": "commentAfterSolution.html",
  "type": "Section",
  "number": "9.2",
  "title": "How do I insert the Comment that often goes after the solution of a ConcepTest in place of the short answer?",
  "body": " How do I insert the Comment that often goes after the solution of a ConcepTest in place of the short answer?  You insert it as though it were the short answer.  "
},
{
  "id": "Conventions",
  "level": "1",
  "url": "Conventions.html",
  "type": "Chapter",
  "number": "10",
  "title": "Conventions",
  "body": " Conventions  See Style and Conventions   "
},
{
  "id": "figuresAndTablesLabel04",
  "level": "1",
  "url": "figuresAndTablesLabel04.html",
  "type": "Section",
  "number": "11.1",
  "title": "What is the preferred convention for labelling figures and tables in Exercises?",
  "body": " What is the preferred convention for labelling figures and tables in Exercises?   Follow this link   "
},
{
  "id": "tableLabels05",
  "level": "1",
  "url": "tableLabels05.html",
  "type": "Section",
  "number": "11.2",
  "title": "When do I put labels (numbers) and captions on tables?",
  "body": " When do I put labels (numbers) and captions on tables?   Follow this link   "
},
{
  "id": "hardCodingReference03",
  "level": "1",
  "url": "hardCodingReference03.html",
  "type": "Section",
  "number": "11.3",
  "title": "May I reference an example, figure, or table, by hard coding the reference (e.g., <code class=\"code-inline tex2jax_ignore\">Example 5<\/code> instead of <code class=\"code-inline tex2jax_ignore\">Example~\\ref{blahblah}<\/code>)?",
  "body": " May I reference an example, figure, or table, by hard coding the reference (e.g., Example 5 instead of Example~\\ref{blahblah} )?   Follow this link   "
},
{
  "id": "ReferenceAllFigs02",
  "level": "1",
  "url": "ReferenceAllFigs02.html",
  "type": "Section",
  "number": "11.4",
  "title": "Do all figures have to be referenced?",
  "body": " Do all figures have to be referenced?   Follow this link   "
},
{
  "id": "CaptionOrNoCaption02",
  "level": "1",
  "url": "CaptionOrNoCaption02.html",
  "type": "Section",
  "number": "11.5",
  "title": "Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?",
  "body": " Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?   Follow this link   "
},
{
  "id": "referencesPrintedText02",
  "level": "1",
  "url": "referencesPrintedText02.html",
  "type": "Section",
  "number": "11.6",
  "title": "How do I reference existing theorems, chapters, sections, examples, exercises, and problems, in the printed calculus text that we are editing?",
  "body": " How do I reference existing theorems, chapters, sections, examples, exercises, and problems, in the printed calculus text that we are editing?   Follow this link   "
},
{
  "id": "referPartFromAnother02",
  "level": "1",
  "url": "referPartFromAnother02.html",
  "type": "Section",
  "number": "11.7",
  "title": "I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?",
  "body": " I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?   Follow this link   "
},
{
  "id": "CrossReferencePageNumber03",
  "level": "1",
  "url": "CrossReferencePageNumber03.html",
  "type": "Section",
  "number": "11.8",
  "title": "How do I cross reference an object using a page number?",
  "body": " How do I cross reference an object using a page number?   Follow this link   "
},
{
  "id": "referExerciseFromAnother02",
  "level": "1",
  "url": "referExerciseFromAnother02.html",
  "type": "Section",
  "number": "11.9",
  "title": "How do I cross reference one exercise from another?",
  "body": " How do I cross reference one exercise from another?   Follow this link   "
},
{
  "id": "DosAndDonts",
  "level": "1",
  "url": "DosAndDonts.html",
  "type": "Chapter",
  "number": "12",
  "title": "Do’s and Don’ts",
  "body": " Do's and Don'ts   Follow this link   "
},
{
  "id": "sequenceOfEquations03",
  "level": "1",
  "url": "sequenceOfEquations03.html",
  "type": "Section",
  "number": "13.1",
  "title": "I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?",
  "body": " I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?   Follow this link   "
},
{
  "id": "piecewiseFunction03",
  "level": "1",
  "url": "piecewiseFunction03.html",
  "type": "Section",
  "number": "13.2",
  "title": "What command do I use in TeX to construct a piecewise defined function?",
  "body": " What command do I use in TeX to construct a piecewise defined function?   Follow this link   "
},
{
  "id": "displaystyle04",
  "level": "1",
  "url": "displaystyle04.html",
  "type": "Section",
  "number": "13.3",
  "title": "Can I use <code class=\"code-inline tex2jax_ignore\">\\displaystyle<\/code> in display math style or in <code class=\"code-inline tex2jax_ignore\">eqnarray*<\/code>?",
  "body": " Can I use \\displaystyle in display math style or in eqnarray* ?   Follow this link   "
},
{
  "id": "shouldKnowDisplayStyle04",
  "level": "1",
  "url": "shouldKnowDisplayStyle04.html",
  "type": "Section",
  "number": "13.4",
  "title": "Is there anything I should know if I use display math style (that is, when an expression is on its own line)?",
  "body": " Is there anything I should know if I use display math style (that is, when an expression is on its own line)?   Follow this link   "
},
{
  "id": "equationsDisplayInLines",
  "level": "1",
  "url": "equationsDisplayInLines.html",
  "type": "Section",
  "number": "13.5",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">\\hbox<\/code>, <code class=\"code-inline tex2jax_ignore\">\\mbox<\/code>, and <code class=\"code-inline tex2jax_ignore\">\\wordeq<\/code>?",
  "body": " What is the difference between \\hbox , \\mbox , and \\wordeq ?  We use \\hbox and \\mbox interchangeably for all text within displayed equations that is not in multiple lines. (See Is there anything I should know if I use display math style (that is, when an expression is on its own line)? .) We use \\wordeq to add multi-line text to displayed equations. For example,  $$ \\wordeq{Amount\\\\remaining}=x $$  produces a centered equation, with the words \"Amount\" and \"remaining\" below each other, with the \"= x\" correctly positioned.  "
},
{
  "id": "differencesDollarSign02",
  "level": "1",
  "url": "differencesDollarSign02.html",
  "type": "Section",
  "number": "13.6",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">$blah$<\/code>, <code class=\"code-inline tex2jax_ignore\">$$blah$$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$\\dsty blah$<\/code>?",
  "body": " What is the difference between $blah$ , $$blah$$ , and $\\dsty blah$ ?   Follow this link   "
},
{
  "id": "equationsDisplayStyle02",
  "level": "1",
  "url": "equationsDisplayStyle02.html",
  "type": "Section",
  "number": "13.7",
  "title": "In display style math (when an equation is on its own line) are both <code class=\"code-inline tex2jax_ignore\">$$equation$$<\/code> and<pre class=\"code-block tex2jax_ignore\">$$ \nequation \n$$\n<\/pre>correct?",
  "body": " In display style math (when an equation is on its own line) are both $$equation$$ and $$ equation $$ correct?   Follow this link   "
},
{
  "id": "doesntTex01",
  "level": "1",
  "url": "doesntTex01.html",
  "type": "Section",
  "number": "14.1",
  "title": "The TeX file I created does not TeX. What do I do?",
  "body": " The TeX file I created does not TeX. What do I do?  Read the error messages to figure out what is going on. They usually contain the filename where the problem occurred as well as a hint at what is wrong. The rest is detective work!  "
},
{
  "id": "dontEnoughTex01",
  "level": "1",
  "url": "dontEnoughTex01.html",
  "type": "Section",
  "number": "14.2",
  "title": "I know what I want to say, but I don’t know enough TeX to express it.  What do I do?",
  "body": " I know what I want to say, but I don't know enough TeX to express it. What do I do?     First, read all the FAQs to make sure the answer is not here. If that is successful, stop. If that fails, continue.    Second, talk to your local TeX guru. If that is successful, go to 5. If that fails, continue.    Third, email Elliot or Enrique with a clear explanation of what you want to do. If that is successful, stop. If that fails, continue.    Fourth, in your document put {\\Huge Elliot, Deb, editor please read.} (that should get someone's attention) followed by a clear explanation of what you want.     "
},
{
  "id": "commonTexMistakes01",
  "level": "1",
  "url": "commonTexMistakes01.html",
  "type": "Section",
  "number": "14.3",
  "title": "Is there a list of common TeX mistakes?",
  "body": " Is there a list of common TeX mistakes?  Yes, see the PDF file in What do a few simple math formulas look like in TeX? .  "
},
{
  "id": "missingDollarSign01",
  "level": "1",
  "url": "missingDollarSign01.html",
  "type": "Section",
  "number": "14.4",
  "title": "Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?",
  "body": " Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?  Because it thinks the underscore in half_life is an attempt on your part to make a subscript, and therefore it really wants you to be in math mode. Replacing \"half_life\" with \"half\\_life\" solves the problem. See How do I print the TeX special characters: $, &, %, #, _,{, and }?   "
},
{
  "id": "formatExercisesFiles01",
  "level": "1",
  "url": "formatExercisesFiles01.html",
  "type": "Section",
  "number": "15.1",
  "title": "What is the correct format and naming convention for exercise files?",
  "body": " What is the correct format and naming convention for exercise files?  Each exercise should be in its own file, with the following structure.  \\Question{ %Your name goes here. Question goes here. }  \\Answer Answer goes here. }  \\ShortAnswer{ Short Answer goes here. }  Note that \"{\" should be on the same line as \"\\Question\", \"\\Answer\", and \"\\ShortAnswer\". Always include an Answer and a ShortAnswer.  A typical filename would be \"1-2dslnp001.tex\", which indicates that the exercise belongs in Chapter 1, Section 2, was written by David Lovelock (dsl), is a new problem (np), and is the first in this set.   Important Update (2\/7\/2003): See The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do?.    Important: You cannot compile (TeX) this file until you have created a master file, see How do I put together a collection of exercises?.   "
},
{
  "id": "reuseFilenames01",
  "level": "1",
  "url": "reuseFilenames01.html",
  "type": "Section",
  "number": "15.2",
  "title": "I wrote an exercise file \"1-2dslgnp001.tex\" which is now being used in Section 6.2. Can I reuse the filename \"1-2dslgnp001.tex\" to create a new problem for Section 1.2?",
  "body": " I wrote an exercise file \"1-2dslgnp001.tex\" which is now being used in Section 6.2. Can I reuse the filename \"1-2dslgnp001.tex\" to create a new problem for Section 1.2?  Not if you want to stay friends with the rest of us! Once you've used an exercise filename, never use it again.  "
},
{
  "id": "exerciseOrProblem01",
  "level": "1",
  "url": "exerciseOrProblem01.html",
  "type": "Section",
  "number": "15.3",
  "title": "How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?",
  "body": " How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?  For problems that are not part of a Qset, there is no way to signify this. For problems that are part of a Qset, which necessarily has an instruction file, use the command \\qsetref{} and it will automatically identify whether the qset is in the Exercises or the Problems.  "
},
{
  "id": "figuresAndTablesLabel01",
  "level": "1",
  "url": "figuresAndTablesLabel01.html",
  "type": "Section",
  "number": "15.4",
  "title": "What is the preferred convention for labelling figures and tables in Exercises?",
  "body": " What is the preferred convention for labelling figures and tables in Exercises?  All the names should be derived from the name of the exercise file. Then, when we rename the exercises in the final version, the labels on the figures and tables will all change with the name of the exercise file, and everything will remain unique and happy.  Let's assume the exercise file is named \"1-2dslgnp3.tex\".   Figures    If you have a single figure in the Question, it is labelled \"1-2dslgnp3 fig \".    If you have several figures in the Question, they are labelled \"1-2dslgnp3 figa \", \"1-2dslgnp3 figb \", etc. (The \"a\", \"b\" have nothing to do with parts (a) and (b) of the Question - if there are any.)    If you have a single figure in the Answer, it is labelled \"1-2dslgnp3 ans \".    If you have several figures in the Answer, they are labelled \"1-2dslgnp3 ansa \", \"1-2dslgnp3 ansb \", etc.    If you have several sets of several figures in the Answer, they are called \"1-2dslgnp3 ansa1 \", \"1-2dslgnp3 ansa2 \", \"1-2dslgnp3 ansb1 \", \"1-2dslgnp3 ansb2 \", etc.   Figures in the Short Answers inherit the labels used in the Answers.  Remember that the label used in a figure is the name of the TeX file that draws that figure.     Tables    If you have a single table in the Question, it is labelled \"1-2dslgnp3 tab \".    If you have several tables in the Question, they are labelled \"1-2dslgnp3 taba \", \"1-2dslgnp3 tabb \", etc.    If you have a single table in the Answer, it is labelled \"1-2dslgnp3 anstab \".    If you have several tables in the Answer, they are labelled \"1-2dslgnp3 anstaba \", \"1-2dslgnp3 anstabb \", etc.    If you have several sets of several tables in the Answer, they are called \"1-2dslgnp3 anstaba1 \", \"1-2dslgnp3 anstaba2 \", \"1-2dslgnp3ans tabb1 \", \"1-2dslgnp3ans tabb2 \", etc.    Tables in the Short Answers do not have labels.  Here is a simplified explanation for single figures and single tables, assuming the exercise file is named \"1-2dslgnp3.tex\".        Question    Answer    Short Answer      Figure   1-2dslgnp3 fig   1-2dslgnp3 ans   1-2dslgnp3 ans      Table   1-2dslgnp3 tab   1-2dslgnp3 anstab         "
},
{
  "id": "table-4",
  "level": "2",
  "url": "figuresAndTablesLabel01.html#table-4",
  "type": "Table",
  "number": "15.4.1",
  "title": "",
  "body": "      Question    Answer    Short Answer      Figure   1-2dslgnp3 fig   1-2dslgnp3 ans   1-2dslgnp3 ans      Table   1-2dslgnp3 tab   1-2dslgnp3 anstab       "
},
{
  "id": "tableLabels01",
  "level": "1",
  "url": "tableLabels01.html",
  "type": "Section",
  "number": "15.5",
  "title": "When do I put labels (numbers) and captions on tables?",
  "body": " When do I put labels (numbers) and captions on tables?  That depends on whether the table is in the text or in an exercise\/problem, and, in the latter case, whether it is in the Question, Answer, or Short Answer. This table summarizes the various cases.        Text    Exercise\/Problem              Question    Answer    Short Answer      Label   Always  Sometimes  Usually  Never     Caption   Always  Never  Wisely  Never     As far as the Answers are concerned, a label (number) is usually useful. However, a caption should only be added if it helps give additional information. It is not worth writing in the caption things that are either obvious or better said in the text part of the Answer.  Here are typical table templates that can be cut, pasted, and modified. See also What is the preferred convention for labelling figures and tables in Exercises.      Table Template for Text    \\begin{stayfig} \\tinput[label] {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}}{The caption lives here} \\end{stayfig}      Table Template for Question (with label)    \\begin{stayfig} \\tinput*[exercisenametab] {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}} \\end{stayfig}      Table Template for Question (no label)    \\begin{stayfig} {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}} \\end{stayfig}      Table Template for Answer    \\begin{stayfig} \\tinput*[exercisenametabans] {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}} \\end{stayfig}      Table Template for Short Answer    \\begin{stayfig} {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}} \\end{stayfig}     "
},
{
  "id": "table-5",
  "level": "2",
  "url": "tableLabels01.html#table-5",
  "type": "Table",
  "number": "15.5.1",
  "title": "",
  "body": "      Text    Exercise\/Problem              Question    Answer    Short Answer      Label   Always  Sometimes  Usually  Never     Caption   Always  Never  Wisely  Never    "
},
{
  "id": "answersAndShortAnswers01",
  "level": "1",
  "url": "answersAndShortAnswers01.html",
  "type": "Section",
  "number": "15.6",
  "title": "Is it OK to submit exercises without Answers or ShortAnswers?",
  "body": " Is it OK to submit exercises without Answers or ShortAnswers?  Absolutely not. Exercises without Answers or ShortAnswers are usually returned or set aside.  "
},
{
  "id": "answersOrShortAnswersMissing01",
  "level": "1",
  "url": "answersOrShortAnswersMissing01.html",
  "type": "Section",
  "number": "15.7",
  "title": "When checking exercises, what do I do if an Answer or ShortAnswer is missing?",
  "body": " When checking exercises, what do I do if an Answer or ShortAnswer is missing?  Either supply the Answer or ShortAnswer, or enter \\Answer{\\answermissing} or \\ShortAnswer{\\shortanswermissing} .  "
},
{
  "id": "collectionOfExercises01",
  "level": "1",
  "url": "collectionOfExercises01.html",
  "type": "Section",
  "number": "15.8",
  "title": "How do I put together a collection of exercises?",
  "body": " How do I put together a collection of exercises?  Let's assume that \"1-2dslnp001.tex\", \"1-2dslnp002.tex\", \"1-2dslnp003.tex\", and \"1-2dslnp004.tex\", are the four files (all in the same directory), each containing one exercise, that you want collect together.  First construct a master TeX file, with the following structure.  \\documentclass{astex} \\asformat{MULTI} \\noautopage \\raggedbottom \\showfilename \\printeverything \\begin{document} \\exercises<filename> \\end{document}  where \"filename\" can be whatever you please, but it should contain your initials, e.g. \"dsl-algebra\".  Then you need to construct a file named \"ex-filename.tex\" (in this example it would be \"ex-dsl-algebra.tex\"), with the following structure.  \\begin{exgroup}<\\exhead> \\qinput{1-2dslnp001} \\qinput{1-2dslnp002} \\qinput{1-2dslnp003} \\qinput{1-2dslnp004} \\end{exgroup}  where \"1-2dslnp001.tex\", \"1-2dslnp002.tex\", \"1-2dslnp003.tex\", and \"1-2dslnp004.tex\" are the four exercise files.  All six files should be in the same directory.  "
},
{
  "id": "qset01",
  "level": "1",
  "url": "qset01.html",
  "type": "Section",
  "number": "15.9",
  "title": "In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?",
  "body": " In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?  Edit the file you created in the answer to How do I put together a collection of exercises? (there called \"ex-filename.tex\") to read  \\begin{exgroup}<\\exhead> \\qinput{1-2dslnp001} \\begin{qset}[ins1-2dslnp002-3] \\qinput{1-2dslnp002} \\qinput{1-2dslnp003} \\end{qset} \\qinput{1-2dslnp004} \\end{exgroup}  where ins1-2dslnp002-3 is a filename that starts with ins and is completed with the filenames of the first (1-2dslnp002) and part of the last (1-2dslnp003) exercises that require the same set of instructions.  This will give the second and third exercises the same set of instructions.  Then, in each of the files \"1-2dslnp002.tex\" and \"1-2dslnp003.tex\" add \\needinstr{ins1-2dslnp002-3} as the first line.  Finally create a file named \"ins1-2dslnp002-3.tex\", containing your instructions, along the following lines.  The statements in Problems~\\qsetrange{} are either true or false. Identify which is which.  The ~\\qsetrange{} is then automatically converted into \"2-3\" when the output file is created.   If you want to reuse the same instructions for a different QSET, make sure you create a second instruction file with the same contents, but a new name.   See When do I use a QSET? for suggestions on when to use a QSET.  "
},
{
  "id": "dollarSign01",
  "level": "1",
  "url": "dollarSign01.html",
  "type": "Section",
  "number": "15.10",
  "title": "In Exercises, when do we use <code class=\"code-inline tex2jax_ignore\">$blah$<\/code>, <code class=\"code-inline tex2jax_ignore\">$$blah$$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$\\dsty blah$<\/code>?",
  "body": " In Exercises, when do we use $blah$ , $$blah$$ , and $\\dsty blah$ ?  It depends on whether we are writing a Question, Answer, or Short Answer.     In the Question.     If it is not part of a \\qset, we tend to avoid $\\dsty blah$ and to use $blah$ .    If it is part of a qset, then $\\dsty blah$ is useful where there are no words and we want the equation\/expression to be big as though centered, but we want it positioned next to the problem number. See for example Calculus page 126, Section 4.3 problems 27,28, and 30-34. They would all be too small if $blah$ was used and they would be centered (away from the problem number) if $$blah$$ was used.    We use $$blah$$ when we say something like  The number of sunflowers in a field is given by the cyclical sunflower equation: $$ S= 500\\sin t, $$ where $t$ is in years.  See for example Calculus p.161, Section 3-misc probs 73-76, 84.  Note: There is no blank line before the first $$ and after the second $$ .       In the Answer.     If the equation\/expression blah is complicated or important, we use $$blah$$ . (However, please see this .) If it is not, we use $blah$ . We seldom use $\\dsty blah$ .       In the Short Answer.     We only use $blah$ . We never, ever, under any circumstances use $$blah$$ and we never use $\\dsty blah$ , unless specifically requested.            Question    Answer    Short Answer      $blah$   Can use  Can use  Can use     $$blah$$   Can use  Can use  Never, ever use     $\\dsty blah$   Occasionally use in QSET  Seldom use  Never use     "
},
{
  "id": "table-6",
  "level": "2",
  "url": "dollarSign01.html#table-6",
  "type": "Table",
  "number": "15.10.1",
  "title": "",
  "body": "      Question    Answer    Short Answer      $blah$   Can use  Can use  Can use     $$blah$$   Can use  Can use  Never, ever use     $\\dsty blah$   Occasionally use in QSET  Seldom use  Never use    "
},
{
  "id": "filenamesBoxes01",
  "level": "1",
  "url": "filenamesBoxes01.html",
  "type": "Section",
  "number": "15.11",
  "title": "How do I turn off the little rectangular boxes that give the filenames of the exercise files alongside the exercises?",
  "body": " How do I turn off the little rectangular boxes that give the filenames of the exercise files alongside the exercises?  Comment out the \\showfilename flag at the beginning of the master file (with a percent sign). However, please leave them in for anything you give in.  "
},
{
  "id": "printEverything01",
  "level": "1",
  "url": "printEverything01.html",
  "type": "Section",
  "number": "15.12",
  "title": "How do I print the questions, the answers, and the short answers for the exercises?",
  "body": " How do I print the questions, the answers, and the short answers for the exercises?  Insert \\printeverything before \\begin{document} in your master file. Also comment out (with a percent sign) \\printboth  \\printshortanswers and \\printquestions if they are there.  For future reference   \\printeverything prints the questions, answers, and short answers.   \\printboth prints the questions and answers.   \\printshortanswers prints the short answers.   \\printquestions prints the questions.    "
},
{
  "id": "printOnlyExerciseQuestion01",
  "level": "1",
  "url": "printOnlyExerciseQuestion01.html",
  "type": "Section",
  "number": "15.13",
  "title": "How do I print only the questions (without the answers or short answers) for the exercises?",
  "body": " How do I print only the questions (without the answers or short answers) for the exercises?  In the master file comment out (with a percent sign) all of the following (some of which are probably there and on): \\printeverything \\printanswers \\printshortanswers \\printboth   "
},
{
  "id": "oneColumnPrint01",
  "level": "1",
  "url": "oneColumnPrint01.html",
  "type": "Section",
  "number": "15.14",
  "title": "How do I print the exercises in one column instead of the default of two columns?",
  "body": " How do I print the exercises in one column instead of the default of two columns?  Replace \\begin{exgroup} with \\begin{exgroup}[1] in your \"ex-\" file.  Alternatively, place \\def\\excols{1} before \\begin{document} in your master file.  "
},
{
  "id": "unitsOnFigures01",
  "level": "1",
  "url": "unitsOnFigures01.html",
  "type": "Section",
  "number": "15.15",
  "title": "Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?",
  "body": " Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?  No. Wherever possible, units should be on the figure, not in the text.  "
},
{
  "id": "conciseVsWording01",
  "level": "1",
  "url": "conciseVsWording01.html",
  "type": "Section",
  "number": "15.16",
  "title": "If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?",
  "body": " If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?  Concise, concise, concise! Here are some examples:      Replace this    With this     Without using a calculator  Without a calculator    Evaluate the following expressions  Evaluate    Suppose a population is growing  A population is growing    Assume f(x) is given by f(x) = x^2 .  Let f(x) = x^2 .    ..., and so ..., and so ...  ..., and .... So ...    Show your work.      Answer the following questions.      Do the following calculations       "
},
{
  "id": "table-7",
  "level": "2",
  "url": "conciseVsWording01.html#table-7",
  "type": "Table",
  "number": "15.16.1",
  "title": "",
  "body": "    Replace this    With this     Without using a calculator  Without a calculator    Evaluate the following expressions  Evaluate    Suppose a population is growing  A population is growing    Assume f(x) is given by f(x) = x^2 .  Let f(x) = x^2 .    ..., and so ..., and so ...  ..., and .... So ...    Show your work.      Answer the following questions.      Do the following calculations      "
},
{
  "id": "shortAnswers01",
  "level": "1",
  "url": "shortAnswers01.html",
  "type": "Section",
  "number": "15.17",
  "title": "What do I need to know about short answers?",
  "body": " What do I need to know about short answers?    Always include a short answer.    If the short answer is inappropriate, use \\ShortAnswer{\\noshortanswer}     If part of a short answer is inappropriate, (for example, part (b)) use \\begin{enumerate} \\item Answer to part (a) \\iinoshrtans \\item Answer to part (c) \\end{enumerate}     Do not use \\frac in the short answers. All fractions are shilled. See What is shilling?.     Do not use \\begin{across} in the short answers.    Text that starts a short answer is capitalized.    Short answers do not end with a period. Different parts of the same answer are separated with semi-colons. For examples of this, see the answers at the back of Calculus, 3rd edition.    (For TeXperts) If you use local TeX definitions\/macros (which are discouraged by the CCHE powers!), please ensure that the Short Answer makes no use of them. Before going to press the short answers are stripped from the exercises. Thus, the short answers lose the reference to local definitions\/macros.    See also    How do I put a figure into the short answer of an exercise or problem? ,    In Exercises, when do we use $blah$ , $$blah$$ , and $\\dsty blah$ ? f ,     If there are many possible answers to an exercise\/problem, what is the correct way to write a short answer?      "
},
{
  "id": "figureInShortAnswer02",
  "level": "1",
  "url": "figureInShortAnswer02.html",
  "type": "Section",
  "number": "15.18",
  "title": "How do I put a figure into the short answer of an exercise or problem?",
  "body": " How do I put a figure into the short answer of an exercise or problem?   Follow this link   "
},
{
  "id": "unitsInShortAnswer01",
  "level": "1",
  "url": "unitsInShortAnswer01.html",
  "type": "Section",
  "number": "15.19",
  "title": "If in the short answers I have the choice between including or omitting units, what should I do?  (For example, if a  problem asks \"How many ships are left?\", should the short answer be \"32\" or \"32 ships\"?",
  "body": " If in the short answers I have the choice between including or omitting units, what should I do? (For example, if a problem asks \"How many ships are left?\", should the short answer be \"32\" or \"32 ships\"?  32 ships. Always include units.  "
},
{
  "id": "manyPossibleAnswersInShortAnswer",
  "level": "1",
  "url": "manyPossibleAnswersInShortAnswer.html",
  "type": "Section",
  "number": "15.20",
  "title": "If there are many possible answers to an exercise\/problem, what is the correct way to write a short answer?",
  "body": " If there are many possible answers to an exercise\/problem, what is the correct way to write a short answer?  Use either  Possible answer: y=x  or  y=x. Other answers possible  However, If the questions says \"Give an example of....\" so it is clear that there are lots of possible answers, then the words \"Possible answer:\" or \"Other answers possible\" are not needed.  "
},
{
  "id": "whenDoIUseQSET01",
  "level": "1",
  "url": "whenDoIUseQSET01.html",
  "type": "Section",
  "number": "15.21",
  "title": "When do I use a QSET?",
  "body": " When do I use a QSET?  See In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET? on how to construct a QSET.  Use a QSET so the instructor can assign complete exercises (\"Do Exercises 1, 3, and 5\"), rather than partial exercises (\"Do Exercises 1(a), 1(c), and 1(e)\").  Thus, the single problem    If f(x) = x^2, (a) Find f(0) (b) Solve f(x) = 0 (c) Find f(1) (d) Solve f(x) = 1 (e) Find f(4) (f) Solve f(x) = 4    would be better as the QSET  In Problems 1-3, f(x) = x^2.    (a) Find f(0) (b) Solve f(x) = 0.    (a) Find f(1) (b) Solve f(x) = 1.    (a) Find f(4 (b) Solve f(x) = 4.    "
},
{
  "id": "exactAnswer01",
  "level": "1",
  "url": "exactAnswer01.html",
  "type": "Section",
  "number": "15.22",
  "title": "The exact answer to one of my exercises is <code class=\"code-inline tex2jax_ignore\">$5\/\\pi$<\/code> inches. Should I also give the calculator value of 1.592?",
  "body": " The exact answer to one of my exercises is $5\/\\pi$ inches. Should I also give the calculator value of 1.592?  It is best to give both, but do not omit the exact answer.  "
},
{
  "id": "decimalPlacesInAnswer01",
  "level": "1",
  "url": "decimalPlacesInAnswer01.html",
  "type": "Section",
  "number": "15.23",
  "title": "How many decimal places should I keep in a numerical answer?",
  "body": " How many decimal places should I keep in a numerical answer?  Usually three, but common sense should prevail. Here are some sample answers, and their numerical counterparts:  pi = 3.142 1\/3 = 0.333 2\/3 = 0.667 1\/10 = 0.1 1\/10,000 = 0.0001 (Keeping only 3 decimal places here would make 1\/10,000 = 0.000.) 5 1\/10,000 = 5.000 5 = 5 9.123 people = 9 people $54.321 = $54.32  "
},
{
  "id": "exerciseFilenameForDifferentBooks01",
  "level": "1",
  "url": "exerciseFilenameForDifferentBooks01.html",
  "type": "Section",
  "number": "15.24",
  "title": "The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do?",
  "body": " The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do?  In What is the correct format and naming convention for exercise files? , a typical filename would be \"1-2dslnp001.tex\", which indicates that the exercise belongs in Chapter 1, Section 2, was written by David Lovelock (dsl), is a new problem (np), and is the first in this set. However, this does not identify the book or edition. The recommended way is to use \"1-2dsl X np001.tex\" where \" X \" is replaced by the appropriate letters, depending on the book.      For this book    Replace \"X\" by     Algebra, preliminary edition  g    Precalc, 3rd ed  pk    Applied, 3rd ed  ak    Single and Multi, 5th ed  q     Thus, exercises created for the algebra text are typically named something like \"1-2dsl g np001.tex\" instead of \"1-2dslnp001.tex\".   Note, we name the files after where they would have gone in the previous edition. For example, when writing exercises for Precalc 3rd, if the exercise would have been in Chapter 3, Section 5, of Precalc 2nd edition, the filename is 3-5dslpknp1.   "
},
{
  "id": "table-8",
  "level": "2",
  "url": "exerciseFilenameForDifferentBooks01.html#table-8",
  "type": "Table",
  "number": "15.24.1",
  "title": "",
  "body": "    For this book    Replace \"X\" by     Algebra, preliminary edition  g    Precalc, 3rd ed  pk    Applied, 3rd ed  ak    Single and Multi, 5th ed  q    "
},
{
  "id": "codeForBooksAndEditions01",
  "level": "1",
  "url": "codeForBooksAndEditions01.html",
  "type": "Section",
  "number": "15.25",
  "title": "(**) Is there any pattern to the way we identify books and editions?",
  "body": " (**) Is there any pattern to the way we identify books and editions?   (2020) Outdated.   Yes. A two character code is used.  The first character is the book.      Book    First Character     Algebra  g    Precalc  p    Applied  a    Single and Multi  (blank)    Biomath  b     The second character is the edition.      Edition    Second Character     Preliminary  p    1st  f    2nd  k    3rd  t     4th    q      It is always assumed that we are creating new problems for the latest edition. Thus, to name a new-problem file for Single (of which the latest edition is the 4th), we use something like \"1-2dsl q np001.tex\", whereas to name a new-problem file for Precalc (of which the latest edition is the 2nd), we use something like \"1-2dsl pk np001.tex\". See What are the latest editions of our books? for the status of our books.   "
},
{
  "id": "table-9",
  "level": "2",
  "url": "codeForBooksAndEditions01.html#table-9",
  "type": "Table",
  "number": "15.25.1",
  "title": "",
  "body": "    Book    First Character     Algebra  g    Precalc  p    Applied  a    Single and Multi  (blank)    Biomath  b    "
},
{
  "id": "table-10",
  "level": "2",
  "url": "codeForBooksAndEditions01.html#table-10",
  "type": "Table",
  "number": "15.25.2",
  "title": "",
  "body": "    Edition    Second Character     Preliminary  p    1st  f    2nd  k    3rd  t     4th    q     "
},
{
  "id": "referPartFromAnother01",
  "level": "1",
  "url": "referPartFromAnother01.html",
  "type": "Section",
  "number": "15.26",
  "title": "I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?",
  "body": " I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?  You type \"part~(a)\". The \"p\" is lower case. The \"~\" is there to make sure that, in the final product, a line break does not occur between \"part\" and \"(a)\", which would look very odd.  "
},
{
  "id": "referExerciseFromAnother01",
  "level": "1",
  "url": "referExerciseFromAnother01.html",
  "type": "Section",
  "number": "15.27",
  "title": "How do I cross reference one exercise from another?",
  "body": " How do I cross reference one exercise from another?  Use the filename (without the tex extension). For example, if you want to reference the exercise that is in the file 7-4dsltnp001.tex, you would do this by writing Exercise~\\ref{7-4dsltnp001} .  To reference the page number, add page~\\pageref{7-4dsltnp001} .  "
},
{
  "id": "hint",
  "level": "1",
  "url": "hint.html",
  "type": "Section",
  "number": "15.28",
  "title": "I want to put a hint in an exercise. How do I do that?",
  "body": " I want to put a hint in an exercise. How do I do that?  Use \\WPHint{ blah blah blah. }   "
},
{
  "id": "filenamesFormat01",
  "level": "1",
  "url": "filenamesFormat01.html",
  "type": "Section",
  "number": "15.29",
  "title": "I’m told that I can construct the filename of any of the exercises just by looking at one of published books. How do I do that?",
  "body": " I'm told that I can construct the filename of any of the exercises just by looking at one of published books. How do I do that?  The format for the filename is: C-SEP.tex where    C = chapter number    S = section number or name (\"misc\" for \"Review Exercises\", \"tf\" for \"Check Your Understanding\", and \"project\" for \"Projects\"    E = edition code determined by Is there any pattern to the way we identify books and editions?     P = problem number    Thus, on page 141 in the 3rd edition of Calculus, the file containing problem 27 (which is in section 3.7) is named \"3-7t27.tex\" constructed as follows    3 = chapter number    7 = section number\/name    t = code for 3rd edition determined by Is there any pattern to the way we identify books and editions?     27 = problem number    Similarly, on page 159 in the 3rd edition of Calculus, the file containing problem 53 (which is in the Review section of chapter 3) is named \"3-misct53.tex\".  "
},
{
  "id": "orVsAndInSolutions01",
  "level": "1",
  "url": "orVsAndInSolutions01.html",
  "type": "Section",
  "number": "15.30",
  "title": "Do we say \"The solutions are $x = 1$ and $x = 2$,\" or \"The solutions are $x = 1$ or $x =2$\"?",
  "body": " Do we say \"The solutions are $x = 1$ and $x = 2$,\" or \"The solutions are $x = 1$ or $x =2$\"?  On the grounds that \"or\" might suggest it was just one or the other but not necessarily both, we use \"and\".  However, in the sentence  \"$(x-1)(x-2) = 0$ when $x = 1$ or $x=2$\"  we use \"or\" because \"and\" might suggest $x$ has to equal 1 and 2 at the same time.  "
},
{
  "id": "ordinalNumbersExpressionsTeX01",
  "level": "1",
  "url": "ordinalNumbersExpressionsTeX01.html",
  "type": "Section",
  "number": "16.1",
  "title": "How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?",
  "body": " How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?  Use either 1$^{\\hbox{\\scriptsize{st}}}$ or $n^{\\rm th}$ .  "
},
{
  "id": "subscripts01",
  "level": "1",
  "url": "subscripts01.html",
  "type": "Section",
  "number": "16.2",
  "title": "When I use  word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large. What should I be using?  Use $r_{\\rm in}$ .  "
},
{
  "id": "vectorSubscript01",
  "level": "1",
  "url": "vectorSubscript01.html",
  "type": "Section",
  "number": "16.3",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\vec F_{M}$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\overrightarrow{F}_M$<\/code> a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?",
  "body": " If I use $\\vec F_{M}$ or $\\overrightarrow{F}_M$ a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?  Use $\\vec F\\!_{M}$ or $\\overrightarrow{F}\\!_M$ .  "
},
{
  "id": "shilling01",
  "level": "1",
  "url": "shilling01.html",
  "type": "Section",
  "number": "16.4",
  "title": "What is shilling?",
  "body": " What is shilling?  Twelve pennies ;-)  A fraction is shilled if it is written in the form 1\/2, which should be TeXed $1\/2$ , so the \"\/\" is the correct length. When you use $\\frac{1}{2}$ , the fraction is not shilled but looks like     after TeXing.  "
},
{
  "id": "half",
  "level": "2",
  "url": "shilling01.html#half",
  "type": "Figure",
  "number": "16.4.1",
  "title": "",
  "body": "  "
},
{
  "id": "shillVsFrac01",
  "level": "1",
  "url": "shillVsFrac01.html",
  "type": "Section",
  "number": "16.5",
  "title": "When do I shill and when do I use <code class=\"code-inline tex2jax_ignore\">$\\frac{}{}$<\/code>?",
  "body": " When do I shill and when do I use $\\frac{}{}$ ?    Always shill in text, in exponents, and in the short answers. However, include ( and ) if necessary, for accuracy. For example, (x^2)\/3 or x^(2\/3) , and not x^2\/3 . Also, if you have a situation where you really need a stacked fraction in line, use \\dsty to make it bigger.    Always use $\\frac{}{}$ in display math style. When you do this, make sure you use \\left( and \\right) instead of ( and ) .    See What is shilling?.   "
},
{
  "id": "degreeSymbol01",
  "level": "1",
  "url": "degreeSymbol01.html",
  "type": "Section",
  "number": "16.6",
  "title": "How do I enter the degree symbol, for example 76 degrees Fahrenheit?",
  "body": " How do I enter the degree symbol, for example 76 degrees Fahrenheit?   $76\\dg$F .  "
},
{
  "id": "LabelFigsExer",
  "level": "1",
  "url": "LabelFigsExer.html",
  "type": "Section",
  "number": "17.1",
  "title": "What is the preferred convention for labeling figures and tables in Exercises?",
  "body": " What is the preferred convention for labeling figures and tables in Exercises?  All the names should be derived from the name of the exercise file. Then, when we rename the exercises in the final version, the labels on the figures and tables will all change with the name of the exercise file, and everything will remain unique and happy.  Let's assume the exercise file is named 1-2dslgnp3.tex .   Figures  Question statements:    If you have a single figure in the Question, it is labeled \"1-2dslgnp3 fig \".    If you have several figures in the Question, they are labeled \"1-2dslgnp3 figa \", \"1-2dslgnp3 figb \", etc. (The \"a\", \"b\" have nothing to do with parts (a) and (b) of the Question - if there are any.)    Answers:    If you have a single figure in the Answer, it is labeled \"1-2dslgnp3 ans \".    If you have several figures in the Answer, they are labeled \"1-2dslgnp3 ansa \", \"1-2dslgnp3 ansb \", etc.    If you have several sets of several figures in the Answer, they are called \"1-2dslgnp3 ansa1 \", \"1-2dslgnp3 ansa2 \", \"1-2dslgnp3 ansb1 \", \"1-2dslgnp3 ansb2 \", etc.    Short answers:    Figures in the Short Answers inherit the labels used in the Answers.    Remember that the label used in a figure is the name of the TeX file that draws that figure.    Tables  Question statements:    If you have a single table in the Question, it is labeled \"1-2dslgnp3 tab \".    If you have several tables in the Question, they are labeled \"1-2dslgnp3 taba \", \"1-2dslgnp3 tabb \", etc.    Answers:    If you have a single table in the Answer, it is labeled \"1-2dslgnp3 anstab \".    If you have several tables in the Answer, they are labeled \"1-2dslgnp3 anstaba \", \"1-2dslgnp3 anstabb \", etc.    If you have several sets of several tables in the Answer, they are called \"1-2dslgnp3 anstaba1 \", \"1-2dslgnp3 anstaba2 \", \"1-2dslgnp3 anstabb1 \", \"1-2dslgnp3 anstabb2 \", etc.    Short answers:    Tables in the Short Answers do not have labels.      Brief Summary  Here is a simplified explanation for single figures and single tables, assuming the exercise file is named \"1-2dslgnp3.tex\".        Question  Answer  Short Answer    Figure  1-2dslgnp3 fig   1-2dslgnp3 ans   1-2dslgnp3 ans     Table  1-2dslgnp3 tab   1-2dslgnp3 anstab          "
},
{
  "id": "table-11",
  "level": "2",
  "url": "LabelFigsExer.html#table-11",
  "type": "Table",
  "number": "17.1.1",
  "title": "",
  "body": "     Question  Answer  Short Answer    Figure  1-2dslgnp3 fig   1-2dslgnp3 ans   1-2dslgnp3 ans     Table  1-2dslgnp3 tab   1-2dslgnp3 anstab       "
},
{
  "id": "hardCodingReference01",
  "level": "1",
  "url": "hardCodingReference01.html",
  "type": "Section",
  "number": "17.2",
  "title": "May I reference an example, figure, or table, by hard coding the reference (e.g., <code class=\"code-inline tex2jax_ignore\">Example 5<\/code> instead of <code class=\"code-inline tex2jax_ignore\">Example~\\ref{blahblah}<\/code>)?",
  "body": " May I reference an example, figure, or table, by hard coding the reference (e.g., Example 5 instead of Example~\\ref{blahblah} )?  No! An editor might think the references are correct, when they aren't. If you are having trouble making a label work, just use \\ref{} (with empty braces) and someone will fix it later. (This will show up as ?? in the file, signaling to an editor that something needs to be fixed.)  "
},
{
  "id": "figureInShortAnswer01",
  "level": "1",
  "url": "figureInShortAnswer01.html",
  "type": "Section",
  "number": "17.3",
  "title": "How do I put a figure into the short answer of an exercise or problem?",
  "body": " How do I put a figure into the short answer of an exercise or problem?  Use \\shortansfinput{blahblahfig} . Do not use fakefig or stayfig .  "
},
{
  "id": "figInDiffEquations",
  "level": "1",
  "url": "figInDiffEquations.html",
  "type": "Section",
  "number": "17.4",
  "title": "I want to use the same figure in two different questions. Can I use exactly the same file?",
  "body": " I want to use the same figure in two different questions. Can I use exactly the same file?  The standard procedure would be to duplicate the file under different names. The reason for this is that at some point someone might change the figure, and you don't want them to inadvertently change the other one as well.  "
},
{
  "id": "ReferenceAllFigs01",
  "level": "1",
  "url": "ReferenceAllFigs01.html",
  "type": "Section",
  "number": "17.5",
  "title": "Do all figures have to be referenced?",
  "body": " Do all figures have to be referenced?  Yes, all figures must be referenced, with two exceptions.    When a QSET of exercises has common instructions such as \"Find equations for the graphs in Problems 1-3.\" , and then Problems 1 through 3 each consist solely of the graph of a function.    When a ConcepTest question has answers (A)-(D), each consisting solely of the graph of a function.    Then, to add a figure with neither number nor caption, use \\begin{stayfig} \\input{1-2dslgnp003fig} \\end{stayfig}   See What is the preferred convention for labeling figures and tables in Exercises? .  "
},
{
  "id": "CaptionOrNoCaption01",
  "level": "1",
  "url": "CaptionOrNoCaption01.html",
  "type": "Section",
  "number": "17.6",
  "title": "Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?",
  "body": " Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that?  The general rule is that figures in the exercises have no captions, whereas figures in the text have captions.    When you want to input a figure with number and caption into a file named \"filename.tex\" insert  \\begin{stayfig} \\finput{filenamefig}{Dummy figure} \\end{stayfig}  where you want the figure to appear. Here Dummy figure will be the caption of the figure and \"filenamefig.tex\" is the file containing the information to input the figure. Notice the filename has \"fig\" appended to the corresponding filename (\"filename.tex\").  If you want to reference this figure, use \\fref{filenamefig}.     When you want to input a figure with number but no caption into a file named \"filename.tex\" insert  \\begin{stayfig} \\finput*{filenamefig} \\end{stayfig}  where you want the figure to appear. Here \"filenamefig.tex\" is the file containing the information to input the figure. Notice the filename has \"fig\" appended to the corresponding filename (\"filename.tex\").  If you want to reference this figure, use \\fref{filenamefig}.     When you want to input a figure with neither number nor caption into a file named \"filename.tex\" insert  \\begin{stayfig} \\input{filenamefig} \\end{stayfig}  where you want the figure to appear. Here \"filenamefig.tex\" is the file containing the information to input the figure. Notice the filename has \"fig\" appended to the corresponding filename (\"filename.tex\").  You might need this construction in an exercise when you want the figs labeled to be part of the question. See Do all figures have to be referenced? for an example of this.    "
},
{
  "id": "StayfigOrFakefig01",
  "level": "1",
  "url": "StayfigOrFakefig01.html",
  "type": "Section",
  "number": "17.7",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">stayfig<\/code> and <code class=\"code-inline tex2jax_ignore\">fakefig<\/code>?",
  "body": " What is the difference between stayfig and fakefig ?  Wherever you see stayfig , (for example, in ) it can be replaced with fakefig . The difference is whether the location of a figure is determined by you ( stayfig ) or by the TeX program ( fakefig ). The stayfig environment fixes the figure's location on the page. The fakefig environment allows figures to float about on the page.  The general rule is to use stayfig in the exercises and always use fakefig in the text. In fact, \"anyone who isn't Elliot should use fakefig in the text\".  "
},
{
  "id": "CollectionOfFigsTogether",
  "level": "1",
  "url": "CollectionOfFigsTogether.html",
  "type": "Section",
  "number": "17.8",
  "title": "I want to put a collection of figures together on a page. How do I do that?",
  "body": " I want to put a collection of figures together on a page. How do I do that?  This depends on whether you want a separate caption for each figure, one caption for all the figures, or no captions. (For the general principles of creating figures Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that? , and What is the difference between stayfig and fakefig ? first.)   Separate caption for each figure  Use  \\begin{fakefig} \\valign[b] { {\\finput{figa}{Caption1}}* {\\finput{figa}{Caption2}}\/ {\\finput{figc}{Caption3}} } \\end{fakefig}  Here   \\valign aligns the figures   [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.   * means put in some space. You can use ** (which means put in lots of space) also.   \/ means make a new line of figures.      One caption for all the figures  First create a file (say \"manyfig.tex\") containing  \\valign[b] { {\\input{figa}}* {\\input{figb}}\/ {\\input{figc}} }  Here    \\valign aligns the figures.   [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.   * means put in some space. You can use ** (which means put in lots of space) also.   \/ means make a new line of figures.   Then use  \\begin{fakefig} \\finput{manyfig}{Caption} \\end{fakefig}    No captions  First create a file (say \"manyfig.tex\") containing  \\valign[b] { {\\input{figa}}* {\\input{figb}}\/ {\\input{figc}} }  Here    \\valign aligns the figures.   [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.   * means put in some space. You can use ** (which means put in lots of space) also.   \/ means make a new line of figures.   Then use  \\begin{fakefig} \\finput*{manyfig} \\end{fakefig}   It is strictly forbidden for \\finput to input\/call another \\finput .  "
},
{
  "id": "PlaceRomanNumeralOnFigCollection",
  "level": "1",
  "url": "PlaceRomanNumeralOnFigCollection.html",
  "type": "Section",
  "number": "17.9",
  "title": "How can I place a Roman numeral, like \"(IV)\", at the upper left-hand corner of a figure as is sometimes needed in a collection of figures?",
  "body": " How can I place a Roman numeral, like \"(IV)\", at the upper left-hand corner of a figure as is sometimes needed in a collection of figures?  To create a collection of figures, see I want to put a collection of figures together on a page. How do I do that? .  To place the Roman numeral \"(IV)\" at the upper left-hand corner of the figure generated by the file \"1-2dslnp003fig1.tex\", which currently contains  \\begin{aspic}|.75|(2.00,2.00) \\put(0,0){\\loadps{1-2dslnp003fig1.ps}} \\end{aspic}  change the first line to  \\begin{aspic}|.75|[(IV)](2.00,2.00)  "
},
{
  "id": "UnitsInTextOrFigure",
  "level": "1",
  "url": "UnitsInTextOrFigure.html",
  "type": "Section",
  "number": "17.10",
  "title": "Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?",
  "body": " Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?  No. Wherever possible, units should be on the figure, not in the text.  "
},
{
  "id": "CrossReferencePageNumber02",
  "level": "1",
  "url": "CrossReferencePageNumber02.html",
  "type": "Section",
  "number": "17.11",
  "title": "How do I cross reference an object using a page number?",
  "body": " How do I cross reference an object using a page number?   Follow this link   "
},
{
  "id": "FigureAxisLabels",
  "level": "1",
  "url": "FigureAxisLabels.html",
  "type": "Section",
  "number": "17.12",
  "title": "What do I need to know when text is used to label the axes in a figure?",
  "body": " What do I need to know when text is used to label the axes in a figure?  Text should be in lower case (including the first letter) and in text mode. See Calculus, 3rd Edition, page 187, Figure 4.42, for an example.  "
},
{
  "id": "UndefinedHollowPointInfFigure",
  "level": "1",
  "url": "UndefinedHollowPointInfFigure.html",
  "type": "Section",
  "number": "17.13",
  "title": "(**) How do I put a little circle on a graph indicating that a function is undefined at that point?",
  "body": " (**) How do I put a little circle on a graph indicating that a function is undefined at that point?  Look in the fig.tex file for the line  \\putlabel(0.01,.58)[c]{blah}  (the numbers will be depend on the selected point) and change {blah} to {\\whiteoutc{\\hollowcalcpoint}} , giving  \\putlabel(0.01,.58)[c]{\\whiteoutc{\\hollowcalcpoint}}  "
},
{
  "id": "ManyFiguresInProblem",
  "level": "1",
  "url": "ManyFiguresInProblem.html",
  "type": "Section",
  "number": "17.14",
  "title": "How do I put many figures into a problem?",
  "body": " How do I put many figures into a problem?   Case 1: The problem asks about a single set of figures that are similar to each other in purpose  For example:   Which of Figures (I)--(IV) is a parabola?  Match Figures (I)--(IV) to statements (a)--(d).  For each Figures (a)--(d). what critical points can you see?   Note that, in general, if the figures make up parts of a problem, the figures should be (a)--(d), so that the solution can have parts (a)--(d).  In Case 1, we give the figures upper-left-hand corner labels, which happens in the filenamefig.tex file in the line  \\begin{aspic}|1|[(a)](2,2)  the [(a)] puts \"(a)\" in the upper-left-hand corner. The figures should be input, so that they don't have a label (i.e. no \"Figure 2.4.\"). For example  \\begin{stayfig} \\valign[b]{ {\\input{figa}} {\\input{figb}}\/ {\\input{figc}} {\\input{figd}} } \\end{stayfig}    Case 2: There are two sets of figures that are cross-related  For example   Match the functions in Figure 2.4 to their derivatives in Figure 2.5.  Figure 5.1 shows a graph of f(x). Write possible equations for the graphs (a)--(d) in Figure 5.2.  Figure 6.8 shows a population of gnus. Figure 6.9 shows a population of penguins.   In these cases, you want it to be very clear that the graphs serve different functions. In this case you use  \\begin{stayfig} \\finput*{fig1} \\end{stayfig} \\begin{stayfig} \\finput*{fig2} \\end{stayfig}  and fig1.tex and fig2.tex contain the figures or the arrays of figures necessary. In sets, you continue to label them (a)--(d) or (I)--(IV) as in Case 1.   "
},
{
  "id": "exerciseFilenameForDifferentBooks02",
  "level": "1",
  "url": "exerciseFilenameForDifferentBooks02.html",
  "type": "Section",
  "number": "18.1",
  "title": "The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do?",
  "body": " The suggested way of naming exercise files is not unique if I am creating exercises for two different books. What do I do?   Follow this link   "
},
{
  "id": "filenamesFormat02",
  "level": "1",
  "url": "filenamesFormat02.html",
  "type": "Section",
  "number": "18.2",
  "title": "I’m told that I can construct the filename of any of the exercises just by looking at one of published books. How do I do that?",
  "body": " I'm told that I can construct the filename of any of the exercises just by looking at one of published books. How do I do that?   Follow this link   "
},
{
  "id": "specialReference01",
  "level": "1",
  "url": "specialReference01.html",
  "type": "Section",
  "number": "19.1",
  "title": "I want to refer to something like City A and City B.  Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?",
  "body": " I want to refer to something like City A and City B. Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?  Use $A$ and $B$ . Also, use City~$A$ . The \"~\" is there to make sure that, in the final product, a line break does not occur between \"City\" and \"A\".  "
},
{
  "id": "ordinalNumbersExpressionsTeX02",
  "level": "1",
  "url": "ordinalNumbersExpressionsTeX02.html",
  "type": "Section",
  "number": "19.2",
  "title": "How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?",
  "body": " How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?   Follow this link   "
},
{
  "id": "subscripts02",
  "level": "1",
  "url": "subscripts02.html",
  "type": "Section",
  "number": "19.3",
  "title": "When I use  word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large. What should I be using?   Follow this link   "
},
{
  "id": "boldface01",
  "level": "1",
  "url": "boldface01.html",
  "type": "Section",
  "number": "19.4",
  "title": "How can I change the typeface to boldface?",
  "body": " How can I change the typeface to boldface?   link missing   Use {\\bf this is boldface} and this is not .  There are eight typeface commands that TeX understands:     \\rm  roman (normal) type    \\bf  boldface type    \\it  italics type    \\sc  small capitals type    \\sf  sans serif type    \\sl  slanted type    \\tt  typewriter style type    \\em  emphasized type      However, all these commands should be deleted before submitting CCHE files, unless the command is used for the same purpose as in the book. For example, \\em is used within references (see What style should we use when citing references to books, articles, or web sites? ); \\rm is used in superscripts and subscripts (see How do I TeX expressions like \"1^{st}\" and \"n^{th}\"? and When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large. What should I be using? ); and \\bf is used when defining a new word in a defbox. In fact, \\em , \\rm , and \\bf are the only three typeface commands that we use. So text that looks italicized is actually emphasized.  "
},
{
  "id": "table-12",
  "level": "2",
  "url": "boldface01.html#table-12",
  "type": "Table",
  "number": "19.4.1",
  "title": "",
  "body": "   \\rm  roman (normal) type    \\bf  boldface type    \\it  italics type    \\sc  small capitals type    \\sf  sans serif type    \\sl  slanted type    \\tt  typewriter style type    \\em  emphasized type    "
},
{
  "id": "typeSize01",
  "level": "1",
  "url": "typeSize01.html",
  "type": "Section",
  "number": "19.5",
  "title": "How can I change the type size?",
  "body": " How can I change the type size?  Use {\\Large this text is larger than normal} and this is normal .  There are ten type size commands that TeX understands, going from smallest to largest:     \\tiny    \\scriptsize    \\footnotesize    \\small    \\normalsize    \\large    \\Large    \\LARGE    \\huge    \\Huge      However, all these commands should be deleted before submitting CCHE files , with two exceptions:    \\Huge should be used to get the attention of Elliot, Deb or any editor. See I know what I want to say, but I don't know enough TeX to express it. What do I do?.    \\scriptsize is sometimes used in the text in underbraces that contain explanatory comments.   "
},
{
  "id": "table-13",
  "level": "2",
  "url": "typeSize01.html#table-13",
  "type": "Table",
  "number": "19.5.1",
  "title": "",
  "body": "   \\tiny    \\scriptsize    \\footnotesize    \\small    \\normalsize    \\large    \\Large    \\LARGE    \\huge    \\Huge    "
},
{
  "id": "footnote01",
  "level": "1",
  "url": "footnote01.html",
  "type": "Section",
  "number": "20.1",
  "title": "How do I insert a footnote?",
  "body": " How do I insert a footnote?  Immediately to the right of the text to be footnoted, place the command \\footnote{Contents of footnote goes here} where Contents of footnote goes here is the footnote. For example,  This word\\footnote{Contents of footnote goes here} is footnoted.  Notice there is no space between \"word\" and \"\\footnote\". The construction  This word \\footnote{Contents of footnote goes here} is footnoted.  leads to an extra space between \"word\" and \"\/footnote\", and should be rewritten as  This word% \\footnote{Contents of footnote goes here} is footnoted.  For footnote placement, see Do I put a footnote before or after a punctuation mark?.   "
},
{
  "id": "footnotePosition01",
  "level": "1",
  "url": "footnotePosition01.html",
  "type": "Section",
  "number": "20.2",
  "title": "Do I put a footnote before or after a punctuation mark?",
  "body": " Do I put a footnote before or after a punctuation mark?  After. Also, avoid footnoting an expression (or variable) because it will appear as though the final term in the expression is raised to the power of the footnote number.  "
},
{
  "id": "displayMathStyle01",
  "level": "1",
  "url": "displayMathStyle01.html",
  "type": "Section",
  "number": "21.1",
  "title": "How can I use the display math style without putting the expression on a new line?",
  "body": " How can I use the display math style without putting the expression on a new line?  Use \\displaystyle , which can be abbreviated \\dsty . However, the proper use of \\displaystyle or \\dsty is $\\dsty blah blah blah $ .  Unless you are trying to keep something within your set of dollar signs out of displaystyle (a very rare occurrence), you should always, when there is a need for displaystyle, put the \\dsty immediately after the first dollar sign. \\dsty continues to remain active until it is delimited, usually by the next dollar sign. Although you can use {\\dsty blah} within a set of dollar signs to limit its effect, this is very rarely useful and mostly makes an annoyance later.  "
},
{
  "id": "differencesDollarSign01",
  "level": "1",
  "url": "differencesDollarSign01.html",
  "type": "Section",
  "number": "21.2",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">$blah$<\/code>, <code class=\"code-inline tex2jax_ignore\">$$blah$$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$\\dsty blah$<\/code>?",
  "body": " What is the difference between $blah$ , $$blah$$ , and $\\dsty blah$ ?     $blah$ prints the equation\/expression blah as part of the text. If blah contains fractions, they should be shilled.     $$blah$$ prints the equation\/expression blah centered on its own line. (However, please see this .) If blah contains fractions, use \\frac{}{} . If blah contains fractions within parentheses, use \\left(\\frac{}{}\\right) .     $\\dsty blah$ is the same as $$blah$$ , except it prints the equation\/expression blah as part of the text, not centered, not on its own line.    "
},
{
  "id": "displaystyle01",
  "level": "1",
  "url": "displaystyle01.html",
  "type": "Section",
  "number": "21.3",
  "title": "Can I use <code class=\"code-inline tex2jax_ignore\">\\displaystyle<\/code> in display math style or in <code class=\"code-inline tex2jax_ignore\">eqnarray*<\/code>?",
  "body": " Can I use \\displaystyle in display math style or in eqnarray* ?  The only time that you should use \\displaystyle (or \\dsty ) within either $$ $$ or eqnarray* is if you're trying to force a fraction within a fraction to be big, or an integral within a fraction, etc. This is a very rare event. Excess \\dsty commands make a confusing mess.  "
},
{
  "id": "shouldKnowDisplayStyle01",
  "level": "1",
  "url": "shouldKnowDisplayStyle01.html",
  "type": "Section",
  "number": "21.4",
  "title": "Is there anything I should know if I use display math style (that is, when an expression is on its own line)?",
  "body": " Is there anything I should know if I use display math style (that is, when an expression is on its own line)?  Yes. There are five things to be aware of.    Almost always, the expression should have a left-hand side, either some text, variable, expression, etc.    To use text when in display math style, use  $$ \\hbox{Diamonds } = \\hbox{ A girl's best friend.} $$  Note that you need the spaces inside the hbox so that the equal sign is not too close.    If text appears in display math style only the first letter of the first word should be capitalized.    Never put a blank line between the first $$ signs and the preceding text.    If there is no blank line after the second $$ , then the text following continues on the next line. If there is a blank line after the second $$ , then the text following starts a new paragraph.    See also and this .  "
},
{
  "id": "integrals01",
  "level": "1",
  "url": "integrals01.html",
  "type": "Section",
  "number": "21.5",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\int f(x) dx$<\/code>, to construct the integral of f(x), the f(x) and dx are too close. What should I do?",
  "body": " If I use $\\int f(x) dx$ , to construct the integral of f(x), the f(x) and dx are too close. What should I do?  Use $\\int f(x)\\, dx$ . This also applies to multiple integrals, such as $f(x,y,z)\\, dV = f(x,x,y)\\, dx\\, dy\\, dz$ .  "
},
{
  "id": "vectorsArrow01",
  "level": "1",
  "url": "vectorsArrow01.html",
  "type": "Section",
  "number": "21.6",
  "title": "Do I use <code class=\"code-inline tex2jax_ignore\">$\\vec F$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\overrightarrow{F}$<\/code> to put an arrow on top of the vector F?",
  "body": " Do I use $\\vec F$ or $\\overrightarrow{F}$ to put an arrow on top of the vector F?  We usually use $\\vec $ if the name of the vector has only one character, and $\\overrightarrow{ }$ if the name of the vector has more than one character. Thus, $\\vec F$ and $\\overrightarrow{AB}$ .  "
},
{
  "id": "vectorSubscript02",
  "level": "1",
  "url": "vectorSubscript02.html",
  "type": "Section",
  "number": "21.7",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\vec F_{M}$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\overrightarrow{F}_M$<\/code> a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?",
  "body": " If I use $\\vec F_{M}$ or $\\overrightarrow{F}_M$ a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?   Follow this link   "
},
{
  "id": "shilling02",
  "level": "1",
  "url": "shilling02.html",
  "type": "Section",
  "number": "21.8",
  "title": "What is shilling?",
  "body": " What is shilling?   Follow this link   "
},
{
  "id": "shillVsFrac02",
  "level": "1",
  "url": "shillVsFrac02.html",
  "type": "Section",
  "number": "21.9",
  "title": "When do I shill and when do I use <code class=\"code-inline tex2jax_ignore\">$\\frac{}{}$<\/code>?",
  "body": " When do I shill and when do I use $\\frac{}{}$ ?   Follow this link   "
},
{
  "id": "range01",
  "level": "1",
  "url": "range01.html",
  "type": "Section",
  "number": "21.10",
  "title": "The three expressions <code class=\"code-inline tex2jax_ignore\">$x > 1$<\/code>, <code class=\"code-inline tex2jax_ignore\">$1 < x < \\infty$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$(1, \\infty)$<\/code> are mathematically equivalent.  Which one do we use?",
  "body": " The three expressions $x > 1$ , $1 < x < \\infty$ , and $(1, \\infty)$ are mathematically equivalent. Which one do we use?   $x > 1$ or $1 < x$ .  "
},
{
  "id": "rightArrow01",
  "level": "1",
  "url": "rightArrow01.html",
  "type": "Section",
  "number": "21.11",
  "title": "May I use the implies symbol ==&gt; (<code class=\"code-inline tex2jax_ignore\">$\\Rightarrow$<\/code>)?",
  "body": " May I use the implies symbol ==> ( $\\Rightarrow$ )?  No.  "
},
{
  "id": "sinNotation01",
  "level": "1",
  "url": "sinNotation01.html",
  "type": "Section",
  "number": "21.12",
  "title": "Do I use <code class=\"code-inline tex2jax_ignore\">$\\sin x$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\sin (x)$<\/code>?",
  "body": " Do I use $\\sin x$ or $\\sin (x)$ ?  Use $\\sin x$ if x is a single entity, and $\\sin (x)$ if it is not. Thus, $\\sin x$ and $\\sin (3x)$ are correct.  "
},
{
  "id": "rootVsZero01",
  "level": "1",
  "url": "rootVsZero01.html",
  "type": "Section",
  "number": "21.13",
  "title": "When do I use root and when do I use zero?",
  "body": " When do I use root and when do I use zero?  Roots and zeros are not interchangeable. The zeros of the function f are the roots of the equation f(x)=0 .  "
},
{
  "id": "equalVsApproEqual01",
  "level": "1",
  "url": "equalVsApproEqual01.html",
  "type": "Section",
  "number": "21.14",
  "title": "When do I use = and when do I use approximately equal (<code class=\"code-inline tex2jax_ignore\">\\approx<\/code>)?",
  "body": " When do I use = and when do I use approximately equal ( \\approx )?  Use approximately equal only if the approximation is not correct to the number of decimal places shown when rounded, so pi = 3.14 but pi approx 3.15.  (We also use approximately if the point is to emphasize the approximation, for example, the fact that tangent line approximation approximates the function.)  However, the books are not yet (and may never be) consistent on the use of \\approx .  "
},
{
  "id": "multipliedTogetherRepeatedly01",
  "level": "1",
  "url": "multipliedTogetherRepeatedly01.html",
  "type": "Section",
  "number": "21.15",
  "title": "To display <code class=\"code-inline tex2jax_ignore\">$a$<\/code> multiplied together repeatedly, do I use <code class=\"code-inline tex2jax_ignore\">$a\\cdot a\\cdot a\\cdot\\cdots\\cdot a$<\/code> or <code class=\"code-inline tex2jax_ignore\">$a\\cdot a\\cdot a\\cdots a$<\/code>?",
  "body": " To display $a$ multiplied together repeatedly, do I use $a\\cdot a\\cdot a\\cdot\\cdots\\cdot a$ or $a\\cdot a\\cdot a\\cdots a$ ?   $a\\cdot a\\cdot a\\cdots a$ .  "
},
{
  "id": "subscripts03",
  "level": "1",
  "url": "subscripts03.html",
  "type": "Section",
  "number": "21.16",
  "title": "When I use  word subscripts (e.g. <code class=\"code-inline tex2jax_ignore\">$r_{in}$<\/code> or <code class=\"code-inline tex2jax_ignore\">$r_{\\hbox{in}}$<\/code>) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$ ) the word \"in\" is either in italics or too large. What should I be using?   Follow this link   "
},
{
  "id": "verticalBar01",
  "level": "1",
  "url": "verticalBar01.html",
  "type": "Section",
  "number": "21.17",
  "title": "When I TeX <code class=\"code-inline tex2jax_ignore\">\\dsty \\left.\\arctan(x)\\right|_0^b<\/code> the vertical bar isn’t long enough.  How can I get it taller?",
  "body": " When I TeX \\dsty \\left.\\arctan(x)\\right|_0^b the vertical bar isn't long enough. How can I get it taller?  Use \\Bigg| in place of \\right| .  "
},
{
  "id": "textIntoEquation01",
  "level": "1",
  "url": "textIntoEquation01.html",
  "type": "Section",
  "number": "21.18",
  "title": "How do I put text into an equation?",
  "body": " How do I put text into an equation?  See Is there anything I should know if I use display math style (that is, when an expression is on its own line)?   "
},
{
  "id": "equationsDisplayStyle01",
  "level": "1",
  "url": "equationsDisplayStyle01.html",
  "type": "Section",
  "number": "21.19",
  "title": "In display style math (when an equation is on its own line) are both <code class=\"code-inline tex2jax_ignore\">$$equation$$<\/code> and<pre class=\"code-block tex2jax_ignore\">$$\nequation\n$$\n<\/pre>correct?",
  "body": " In display style math (when an equation is on its own line) are both $$equation$$ and $$ equation $$ correct?  Yes. However, it is hard to read the Tex files when $$equation$$ is used. It is preferable to have the equation displayed in the TeX file if it's going to be displayed in the output. So please use  $$ equation $$  "
},
{
  "id": "formatExercisesFiles02",
  "level": "1",
  "url": "formatExercisesFiles02.html",
  "type": "Section",
  "number": "22.1",
  "title": "What is the correct format and naming convention for exercise files?",
  "body": " What is the correct format and naming convention for exercise files?   Follow this link   "
},
{
  "id": "tableFormat01",
  "level": "1",
  "url": "tableFormat01.html",
  "type": "Section",
  "number": "22.2",
  "title": "What is the preferred formatting for a table?",
  "body": " What is the preferred formatting for a table?  Note: a table should be placed at the end of the example, exercise, or paragraph that uses it, and then referenced from the example, exercise, or paragraph. Never refer to the table by using a phrase like  See the table below. \\begin{stayfig} \\tinput*[table2] {\\begin{calctabular}{c|c|c|c|c} Time (hours) & 0 & 24 & 48 & 72\\\\ \\hline Temperature (F)& 75 & 75 & 75 & 75 \\end{calctabular}} \\end{stayfig}  The table starts with \\begin{stayfig} and ends with \\end{stayfig} .  In all the mess that's in between these two commands you should be able to see where the table entries are: they are in lines like Time (hours) & 0 & 24 & 48 & 72\\\\ . The & 's separate entries and the \\\\ ends a row.  Another thing you will need to adjust is the row \\begin{calctabular}{c|c|c|c|c} . The first c is for the column containing the names of the variables or the function, and the remaining ones are for the entries in the table, so there should be as many of them as columns in the table (five in this case). Also, the c (center the column) could be replaced by l (left justify the column), or r (right justify the column).  This particular table has no caption, which is the general rule in exercises. However, tables in the text require captions. To create a table with a caption requires two changes:    Replace the line \\tinput*[table2] with \\tinput[table2] .    and replace the line \\end{calctabular}} with \\end{calctabular}}{The caption lives here} .    Here table2 can be whatever label you please, but it must be unique. (However, see What is the preferred convention for labelling figures and tables in Exercises? .) If you want to reference this table, you do so by something like Table~\\ref{table2} shows how to create a table in the book.   If you want to create a table with no table number (because it is not referenced, as happens in the short answers, and might happen in the exercises) delete the line \\tinput*[table2]   The first word in table headings should always start with a capital letter. Thus, \"Time\", \"Temperature\", and \"Percentage finished\" are correct.  For an example of a multi-row table, see How wide can I make a table?.   "
},
{
  "id": "figuresCollection",
  "level": "1",
  "url": "figuresCollection.html",
  "type": "Section",
  "number": "22.3",
  "title": "I want to put a collection of figures together on a page. How do I do that?",
  "body": " I want to put a collection of figures together on a page. How do I do that?  This depends on whether you want a separate caption for each figure, one caption for all the figures, or no captions. (For the general principles of creating figures Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that? , and What is the difference between stayfig and fakefig ? first.)    Separate caption for each figure. Use  \\begin{fakefig} \\valign[b] { {\\finput{figa}{Caption1}}* {\\finput{figa}{Caption2}}\/ {\\finput{figc}{Caption3}} } \\end{fakefig}  Here     \\valign aligns the figures.    [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.    * means put in some space. You can use ** (which means put in lots of space) also.    \/ means make a new line of figures.      One caption for all the figures. First create a file (say \"manyfig.tex\") containing  \\valign[b] { {\\input{figa}}* {\\input{figb}}\/ {\\input{figc}} }  Here     \\valign aligns the figures.    [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.    * means put in some space. You can use ** (which means put in lots of space) also.    \/ means make a new line of figures.    Then use  \\begin{fakefig} \\finput{manyfig}{Caption} \\end{fakefig}    No captions. First create a file (say \"manyfig.tex\") containing  \\valign[b] { {\\input{figa}}* {\\input{figb}}\/ {\\input{figc}} }  Here     \\valign aligns the figures.    [b] makes them bottom-aligned. You can use [c] (centered) and [t] (top-aligned) also.    * means put in some space. You can use ** (which means put in lots of space) also.    \/ means make a new line of figures.    Then use  \\begin{fakefig} \\finput*{manyfig} \\end{fakefig}    It is strictly forbidden for \\finput to input\/call another \\finput .  "
},
{
  "id": "somethingInBox01",
  "level": "1",
  "url": "somethingInBox01.html",
  "type": "Section",
  "number": "22.4",
  "title": "What command do I use in TeX to place something in a box, similar to page 2 in Calculus, 3rd Edition?",
  "body": " What command do I use in TeX to place something in a box, similar to page 2 in Calculus, 3rd Edition?  There are two boxes, \\defbox{stuff} and \\rulebox{stuff} . One is colored and one not, otherwise they are the same.  "
},
{
  "id": "boldface02",
  "level": "1",
  "url": "boldface02.html",
  "type": "Section",
  "number": "22.5",
  "title": "How can I change the typeface to boldface?",
  "body": " How can I change the typeface to boldface?   Follow this link   "
},
{
  "id": "typeSize02",
  "level": "1",
  "url": "typeSize02.html",
  "type": "Section",
  "number": "22.6",
  "title": "How can I change the type size?",
  "body": " How can I change the type size?   Follow this link   "
},
{
  "id": "spaceBetweenTwoLines01",
  "level": "1",
  "url": "spaceBetweenTwoLines01.html",
  "type": "Section",
  "number": "22.7",
  "title": "How can I increase space between two lines?",
  "body": " How can I increase space between two lines?  Between paragraphs, use \\smallskip , \\medskip , or \\bigskip .   However, all these commands should be deleted before submitting CCHE files.   "
},
{
  "id": "spaceBeforeAfterDashes01",
  "level": "1",
  "url": "spaceBeforeAfterDashes01.html",
  "type": "Section",
  "number": "22.8",
  "title": "Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don’t want that. What do I do?",
  "body": " Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don't want that. What do I do?  A construction like Some time ago---perhaps a month should give no spaces before or after the em-dash. A construction like  Some time ago--- perhaps a month  leads to a space between the em-dash and the word perhaps , which we do not want. A construction like  Some time ago ---perhaps a month  also leads to a space between the word ago and the em-dash, which we do not want. To solve the problem, either do not break a line at the beginning or end of any dash (the preferred method), or insert % at the end of the first line. For example  Some time ago---% perhaps a month  or  Some time ago% ---perhaps a month  accomplish the same thing.  "
},
{
  "id": "periodBetween01",
  "level": "1",
  "url": "periodBetween01.html",
  "type": "Section",
  "number": "22.9",
  "title": "When I TeX \"The difference is <code class=\"code-inline tex2jax_ignore\">\\$0.01.<\/code>\" there is a spacing problem involving the period between the two zeros. What do I do?",
  "body": " When I TeX \"The difference is \\$0.01. \" there is a spacing problem involving the period between the two zeros. What do I do?  Replace \\$0.01. with $\\$0.01$.   "
},
{
  "id": "ordinalNumbersExpressionsTeX03",
  "level": "1",
  "url": "ordinalNumbersExpressionsTeX03.html",
  "type": "Section",
  "number": "22.10",
  "title": "How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?",
  "body": " How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?   Follow this link   "
},
{
  "id": "thousandNotation01",
  "level": "1",
  "url": "thousandNotation01.html",
  "type": "Section",
  "number": "22.11",
  "title": "Do we use 1000 or 1,000?",
  "body": " Do we use 1000 or 1,000?  For numbers between -10,000 and 10,000, we omit the comma. Otherwise we include it. Thus, 9999 and 10,000 are correct. However, when in math mode, 10,000 is entered as $10,\\!000$ to suppress the space after the comma.  "
},
{
  "id": "decimalsNotation01",
  "level": "1",
  "url": "decimalsNotation01.html",
  "type": "Section",
  "number": "22.12",
  "title": "Do we use 0.5 or .5?",
  "body": " Do we use 0.5 or .5?  All decimals should be preceded by an integer. Thus, 0.5 is correct.  "
},
{
  "id": "shilling03",
  "level": "1",
  "url": "shilling03.html",
  "type": "Section",
  "number": "22.13",
  "title": "What is shilling?",
  "body": " What is shilling?   Follow this link   "
},
{
  "id": "shillVsFrac03",
  "level": "1",
  "url": "shillVsFrac03.html",
  "type": "Section",
  "number": "22.14",
  "title": "When do I shill and when do I use <code class=\"code-inline tex2jax_ignore\">$\\frac{}{}$<\/code>?",
  "body": " When do I shill and when do I use $\\frac{}{}$ ?   Follow this link   "
},
{
  "id": "sentenceStart01",
  "level": "1",
  "url": "sentenceStart01.html",
  "type": "Section",
  "number": "22.15",
  "title": "May I start a sentence with a variable or a number?",
  "body": " May I start a sentence with a variable or a number?  Usually no. However, solutions to short exercises which require no text may contain mathematical sentences, although the preference is to do this sparingly, if at all. For example the solution to the question Differentiate $y=(x^2-1)(x+3)^2$ might be $y'=2x(x+3)^2+(x^2-1)2(x+3)=(x+3)(2x(x+3)+2(x^2-1))=$ etc. However, these equations must not be in display math style (don't use $$ ), but may contain \\dsty .  "
},
{
  "id": "variablesSeparetedByText01",
  "level": "1",
  "url": "variablesSeparetedByText01.html",
  "type": "Section",
  "number": "22.16",
  "title": "The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?",
  "body": " The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?  The two variables $x^4$ and $y$ should be separated by text, so it is clear that these two variables are distinct. Thus, the text should be corrected to something like: Since the leading term of the polynomial is $x^4$, the value of $y$ goes to infinity .  "
},
{
  "id": "specialReference02",
  "level": "1",
  "url": "specialReference02.html",
  "type": "Section",
  "number": "22.17",
  "title": "I want to refer to something like City A and City B.  Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?",
  "body": " I want to refer to something like City A and City B. Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?   Follow this link   "
},
{
  "id": "rightArrow02",
  "level": "1",
  "url": "rightArrow02.html",
  "type": "Section",
  "number": "22.18",
  "title": "May I use the implies symbol ==&gt; (<code class=\"code-inline tex2jax_ignore\">$\\Rightarrow$<\/code>)?",
  "body": " May I use the implies symbol ==> ( $\\Rightarrow$ )?   Follow this link   "
},
{
  "id": "rootVsZero02",
  "level": "1",
  "url": "rootVsZero02.html",
  "type": "Section",
  "number": "22.19",
  "title": "When do I use root and when do I use zero?",
  "body": " When do I use root and when do I use zero?   Follow this link   "
},
{
  "id": "symmetricAcrossVsAbout01",
  "level": "1",
  "url": "symmetricAcrossVsAbout01.html",
  "type": "Section",
  "number": "22.20",
  "title": "Do I use symmetric across the <em class=\"emphasis\">x<\/em>-axis, or symmetric about the <em class=\"emphasis\">x<\/em>-axis?",
  "body": " Do I use symmetric across the x -axis, or symmetric about the x -axis?  Symmetric about the x -axis or the origin, but reflect across the x -axis or the origin.  "
},
{
  "id": "latinAbbreviations02",
  "level": "1",
  "url": "latinAbbreviations02.html",
  "type": "Section",
  "number": "22.21",
  "title": "Do we italicize Latin abbreviations such as e.g. and i.e.?",
  "body": " Do we italicize Latin abbreviations such as e.g. and i.e.?   Follow this link   "
},
{
  "id": "capitalizingHeadings01",
  "level": "1",
  "url": "capitalizingHeadings01.html",
  "type": "Section",
  "number": "22.22",
  "title": "What is the convention for capitalizing headings of chapters, sections, and subsections?",
  "body": " What is the convention for capitalizing headings of chapters, sections, and subsections?  All the letters in a chapter heading are capitalized. The first letter of every word of a section (or subsection) heading is capitalized, (following the usual conventions, with \"a\", \"and\", \"for\", \"on\", \"the\", \"to\" and so on, not being capitalized, unless they start the heading).  "
},
{
  "id": "formattingCommands01",
  "level": "1",
  "url": "formattingCommands01.html",
  "type": "Section",
  "number": "22.23",
  "title": "May I use formatting commands (like  \\vspace, \\hspace, \\smallskip, \\\\, etc.) in the text portion of my file?",
  "body": " May I use formatting commands (like \\vspace, \\hspace, \\smallskip, \\\\, etc.) in the text portion of my file?  Absolutely not. It is a nightmare for pagination, formatting, etc.  "
},
{
  "id": "unitsOnFigures02",
  "level": "1",
  "url": "unitsOnFigures02.html",
  "type": "Section",
  "number": "22.24",
  "title": "Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?",
  "body": " Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?   Follow this link   "
},
{
  "id": "conciseVsWording02",
  "level": "1",
  "url": "conciseVsWording02.html",
  "type": "Section",
  "number": "22.25",
  "title": "If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?",
  "body": " If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?   Follow this link   "
},
{
  "id": "exactAnswer02",
  "level": "1",
  "url": "exactAnswer02.html",
  "type": "Section",
  "number": "22.26",
  "title": "The exact answer to one of my exercises is <code class=\"code-inline tex2jax_ignore\">$5\/\\pi$<\/code> inches. Should I also give the calculator value of 1.592?",
  "body": " The exact answer to one of my exercises is $5\/\\pi$ inches. Should I also give the calculator value of 1.592?   Follow this link   "
},
{
  "id": "subscripts04",
  "level": "1",
  "url": "subscripts04.html",
  "type": "Section",
  "number": "22.27",
  "title": "When I use  word subscripts (e.g. <code class=\"code-inline tex2jax_ignore\">$r_{in}$<\/code> or <code class=\"code-inline tex2jax_ignore\">$r_{\\hbox{in}}$<\/code>) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$ ) the word \"in\" is either in italics or too large. What should I be using?   Follow this link   "
},
{
  "id": "generateTildeBlah01",
  "level": "1",
  "url": "generateTildeBlah01.html",
  "type": "Section",
  "number": "22.28",
  "title": "How do I get TeX to generate <code class=\"code-inline tex2jax_ignore\">~blah<\/code>?",
  "body": " How do I get TeX to generate ~blah ?  Use \\~{}blah . ( \\~blah puts a ~ over the b in blah , while ~blah puts a space before blah .)  "
},
{
  "id": "textIntoEquation02",
  "level": "1",
  "url": "textIntoEquation02.html",
  "type": "Section",
  "number": "22.29",
  "title": "How do I put text into an equation?",
  "body": " How do I put text into an equation?   Follow this link   "
},
{
  "id": "shilling04",
  "level": "1",
  "url": "shilling04.html",
  "type": "Section",
  "number": "23.1",
  "title": "What is shilling?",
  "body": " What is shilling?   Follow this link   "
},
{
  "id": "shillVsFrac04",
  "level": "1",
  "url": "shillVsFrac04.html",
  "type": "Section",
  "number": "23.2",
  "title": "When do I shill and when do I use <code class=\"code-inline tex2jax_ignore\">$\\frac{}{}$<\/code>?",
  "body": " When do I shill and when do I use $\\frac{}{}$ ?   Follow this link   "
},
{
  "id": "sequenceOfEquations01",
  "level": "1",
  "url": "sequenceOfEquations01.html",
  "type": "Section",
  "number": "24.1",
  "title": "I want to create a sequence of equations, one below the other, with the equal signs lined up.  How do I do that?",
  "body": " I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?  When you want to line up equations like this:     5  =  3 + 2    x  =  19 - 77z    q - x  =  y     you should use the following:  \\begin{eqnarray*} 5 & = & 3+2 \\\\ x & = & 19-77z \\\\ q-x & = & y \\end{eqnarray*}   Important: Notice that the last equation does not end with \"\\\\\". Also, don't have blank lines before \\begin{eqnarray*} , after \\end{eqnarray*} , or between them.   Also, this way of simplifying or evaluating the right-hand side an equation:  \\begin{eqnarray*} y & = & x^2+2x+x+2 \\\\ & = & x^2+3x+2 \\\\ & = & (x+1)(x+2). \\end{eqnarray*}  is preferred over this:  \\begin{eqnarray*} y & = & x^2+2x+x+2 \\\\ y & = & x^2+3x+2 \\\\ y & = & (x+1)(x+2). \\end{eqnarray*}  "
},
{
  "id": "table-14",
  "level": "2",
  "url": "sequenceOfEquations01.html#table-14",
  "type": "Table",
  "number": "24.1.1",
  "title": "",
  "body": "   5  =  3 + 2    x  =  19 - 77z    q - x  =  y    "
},
{
  "id": "piecewiseFunction01",
  "level": "1",
  "url": "piecewiseFunction01.html",
  "type": "Section",
  "number": "24.2",
  "title": "What command do I use in TeX to construct a piecewise defined function?",
  "body": " What command do I use in TeX to construct a piecewise defined function?  $$ V(t)=\\left\\{ \\begin{tabular}{lll} $5t+10$ & if & $0\\leq t\\leq 10$ \\\\ $3t+30$ & if & $10 & < t\\leq 20$ \\\\ $90$ & if & $20 & < t \\leq 30$ \\end{tabular} \\right. $$  "
},
{
  "id": "displaystyle02",
  "level": "1",
  "url": "displaystyle02.html",
  "type": "Section",
  "number": "24.3",
  "title": "Can I use <code class=\"code-inline tex2jax_ignore\">\\displaystyle<\/code> in display math style or in <code class=\"code-inline tex2jax_ignore\">eqnarray*<\/code>?",
  "body": " Can I use \\displaystyle in display math style or in eqnarray* ?   Follow this link   "
},
{
  "id": "shouldKnowDisplayStyle02",
  "level": "1",
  "url": "shouldKnowDisplayStyle02.html",
  "type": "Section",
  "number": "24.4",
  "title": "Is there anything I should know if I use display math style (that is, when an expression is on its own line)?",
  "body": " Is there anything I should know if I use display math style (that is, when an expression is on its own line)?   Follow this link   "
},
{
  "id": "summaryGuidelines",
  "level": "1",
  "url": "summaryGuidelines.html",
  "type": "Section",
  "number": "25.1",
  "title": "=Is there a summary of CCHE Guidelines?",
  "body": " =Is there a summary of CCHE Guidelines?  CCHE came before MCWG. A summary from way back then (if not broken) is at here .  "
},
{
  "id": "listDownThePage",
  "level": "1",
  "url": "listDownThePage.html",
  "type": "Section",
  "number": "26.1",
  "title": "How do I construct a list, (a), (b), etc., that goes down the page?",
  "body": " How do I construct a list, (a), (b), etc., that goes down the page?  \\begin{enumerate} \\item Text for (a) \\item Text for (b) \\end{enumerate}  You can use some of our macros (see Which TeX commands can I abbreviate? ) and replace this with  \\bb \\ii Text for (a) \\ii Text for (b) \\ee  "
},
{
  "id": "listAcrossThePage",
  "level": "1",
  "url": "listAcrossThePage.html",
  "type": "Section",
  "number": "26.2",
  "title": "How do I construct a list, (a), (b), etc., that goes across the page?",
  "body": " How do I construct a list, (a), (b), etc., that goes across the page?  \\begin{across}<2> \\item Text for (a) \\item Text for (b) \\end{across}  The angle bracket argument determines the number of columns. We do not use across in either Answers or Short Answers .  "
},
{
  "id": "bulletedList",
  "level": "1",
  "url": "bulletedList.html",
  "type": "Section",
  "number": "26.3",
  "title": "How do I construct a bulleted list?",
  "body": " How do I construct a bulleted list?  \\begin{itemize} \\item Text for first bullet \\item Text for second bullet \\end{itemize}  "
},
{
  "id": "filenamesBoxes02",
  "level": "1",
  "url": "filenamesBoxes02.html",
  "type": "Section",
  "number": "27.1",
  "title": "How do I turn off the little rectangular boxes that give the filenames of the exercise files alongside the exercises?",
  "body": " How do I turn off the little rectangular boxes that give the filenames of the exercise files alongside the exercises?   Follow this link   "
},
{
  "id": "printingInColor",
  "level": "1",
  "url": "printingInColor.html",
  "type": "Section",
  "number": "27.2",
  "title": "How do I stop printing in color?",
  "body": " How do I stop printing in color?  If you make the \\asformat line of your master file into \\asformat{CALCSOLS} instead of whatever it is now, it will print in black and white.  "
},
{
  "id": "printingJobNumberDate",
  "level": "1",
  "url": "printingJobNumberDate.html",
  "type": "Section",
  "number": "27.3",
  "title": "How do I stop printing the header with the job number and date in it?",
  "body": " How do I stop printing the header with the job number and date in it?  Insert \\notimestamp before \\begin{document} in your master file.  "
},
{
  "id": "printEverything02",
  "level": "1",
  "url": "printEverything02.html",
  "type": "Section",
  "number": "27.4",
  "title": "How do I print the questions, the answers, and the short answers for the exercises?",
  "body": " How do I print the questions, the answers, and the short answers for the exercises?   Follow this link   "
},
{
  "id": "printOnlyExerciseQuestion02",
  "level": "1",
  "url": "printOnlyExerciseQuestion02.html",
  "type": "Section",
  "number": "27.5",
  "title": "How do I print only the questions (without the answers or short answers) for the exercises?",
  "body": " How do I print only the questions (without the answers or short answers) for the exercises?   Follow this link   "
},
{
  "id": "oneColumnPrint02",
  "level": "1",
  "url": "oneColumnPrint02.html",
  "type": "Section",
  "number": "27.6",
  "title": "How do I print the exercises in one column instead of the default of two columns?",
  "body": " How do I print the exercises in one column instead of the default of two columns?   Follow this link   "
},
{
  "id": "pageNumbering",
  "level": "1",
  "url": "pageNumbering.html",
  "type": "Section",
  "number": "27.7",
  "title": "How do I turn on page numbering?",
  "body": " How do I turn on page numbering?  In the master file, after \\begin{document} put \\pagestyle{plain} .  "
},
{
  "id": "printFAQ",
  "level": "1",
  "url": "printFAQ.html",
  "type": "Section",
  "number": "27.8",
  "title": "Should I print these FAQs?",
  "body": " Should I print these FAQs?  No, for two reasons. First, they will produce a document of about 80 pages. Second, the printed version will be out of date by the time you print it!  "
},
{
  "id": "dontEnoughTex02",
  "level": "1",
  "url": "dontEnoughTex02.html",
  "type": "Section",
  "number": "28.1",
  "title": "I know what I want to say, but I don’t know enough TeX to express it.  What do I do?",
  "body": " I know what I want to say, but I don't know enough TeX to express it. What do I do?   Follow this link   "
},
{
  "id": "submitTroubles01",
  "level": "1",
  "url": "submitTroubles01.html",
  "type": "Section",
  "number": "28.2",
  "title": "What are the things people seem have trouble with when they submit?",
  "body": " What are the things people seem have trouble with when they submit?    Not reading the FAQs. In particular:     When do I shill and when do I use $\\frac{}{}$ ?      How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?      What do I need to know about short answers?      When do I use = and when do I use approximately equal ( \\approx )?      May I use the future tense?      May I start a sentence with a variable or a number?      What are the abbreviations and conventions that we use for standard units like grams and miles per hour?       Spelling. Use the spelling conventions in existing books. For example, use coordinate, not co-ordinate; use left-hand side, not left hand side.    Terminology. Make sure your terminology is consistent with existing books. For example, we use cylinder, not right circular cylinder.    Wording. If you are struggling with the wording, look in one of the other books and find a problem that does a similar thing, and copy the wording, even if you don't like it. There are usually reasons for the way we word things.    QSETs. If the parts of a problem are repeated examples of the same sort of thing and are independent of each other ... for example, if you can imagine assigning just parts c and f ... then the problem should be broken up into a QSET. See In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET? on how to construct a QSET, and When do I use a QSET? on when to use a QSET.    Figures. Please make a TeX file for your figure, with the \\figuremissing macro in it, and with instructions one how to make (commented out with percent signs). (Better still, use Eric's web site to draw the figure yourself.) Also use stayfig or fakefig (see Sometimes I want a figure with a number and a caption, sometimes with only a number, and sometimes with neither a number nor a caption. How do I do that? ) and don't comment that out (so we can clearly see where figures need to be made).    Tables. Please make them horizontal unless you have good reason to make them vertical. See How wide can I make a table? on how wide to make a table.    Hard spaces. Never use them outside mathematics. Don't use \\ or \\\\ or \\hspace or \\vspace or any other hard coded spaces. See May I use formatting commands (like \\vspace, \\hspace, \\smallskip, \\\\, etc.) in the text portion of my file? . Inside mathematics, if you find yourself using them a lot, there's usually a better way. For example, do  $$ z = \\mbox{ the sum of $x$ and $y$ } $$  instead of  $$ z = \\mbox{the sum of}\\ x\\ \\mbox{and}\\ y $$  Elliot recommends always putting spaces around the words in \\mbox and \\hbox , such as  $$ y= \\hbox{ Chocolate } = x. $$  Usually if you leave out the spaces around Chocolate, since math mode doesn't distinguish text from symbols, the C or e in chocolate might be far too close to the equal sign.    Labels. They go on examples, not their solutions. See How do I put an Example in a Chapter? on how to reference an Example.    References. Never put in hard references. Just do \\ref{} , with a note about where it should point. See May I reference an example, figure, or table, by hard coding the reference (e.g., \"Example 5\" instead of \"Example~\\ref{blahblah}\")? .    "
},
{
  "id": "spaceBeforeAfterDashes02",
  "level": "1",
  "url": "spaceBeforeAfterDashes02.html",
  "type": "Section",
  "number": "28.3",
  "title": "Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don’t want that. What do I do?",
  "body": " Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don't want that. What do I do?   Follow this link   "
},
{
  "id": "integrals02",
  "level": "1",
  "url": "integrals02.html",
  "type": "Section",
  "number": "28.4",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\int f(x) dx$<\/code>, to construct the integral of f(x), the f(x) and dx are too close. What should I do?",
  "body": " If I use $\\int f(x) dx$ , to construct the integral of f(x), the f(x) and dx are too close. What should I do?   Follow this link   "
},
{
  "id": "commonTexMistakes02",
  "level": "1",
  "url": "commonTexMistakes02.html",
  "type": "Section",
  "number": "28.5",
  "title": "Is there a list of common TeX mistakes?",
  "body": " Is there a list of common TeX mistakes?   Follow this link   "
},
{
  "id": "periodBetween02",
  "level": "1",
  "url": "periodBetween02.html",
  "type": "Section",
  "number": "28.6",
  "title": "When I TeX \"The difference is <code class=\"code-inline tex2jax_ignore\">\\$0.01.<\/code>\" there is a spacing problem involving the period between the two zeros. What do I do?",
  "body": " When I TeX \"The difference is \\$0.01. \" there is a spacing problem involving the period between the two zeros. What do I do?   Follow this link   "
},
{
  "id": "commentChunkTex01",
  "level": "1",
  "url": "commentChunkTex01.html",
  "type": "Section",
  "number": "28.7",
  "title": "I want to comment out a large chunk of TeX, without deleting it.  Do I have to put % at the beginning of every line?",
  "body": " I want to comment out a large chunk of TeX, without deleting it. Do I have to put % at the beginning of every line?  No. You can use the command  \\ignore{ blah blah blah }  "
},
{
  "id": "missingDollarSign02",
  "level": "1",
  "url": "missingDollarSign02.html",
  "type": "Section",
  "number": "28.8",
  "title": "Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?",
  "body": " Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?   Follow this link   "
},
{
  "id": "qset02",
  "level": "1",
  "url": "qset02.html",
  "type": "Section",
  "number": "29.1",
  "title": "In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?",
  "body": " In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?   Follow this link   "
},
{
  "id": "whenDoIUseQSET02",
  "level": "1",
  "url": "whenDoIUseQSET02.html",
  "type": "Section",
  "number": "29.2",
  "title": "When do I use a QSET?",
  "body": " When do I use a QSET?   Follow this link   "
},
{
  "id": "ReferenceAllFigs03",
  "level": "1",
  "url": "ReferenceAllFigs03.html",
  "type": "Section",
  "number": "29.3",
  "title": "Do all figures have to be referenced?",
  "body": " Do all figures have to be referenced?   Follow this link   "
},
{
  "id": "dollarSign02",
  "level": "1",
  "url": "dollarSign02.html",
  "type": "Section",
  "number": "29.4",
  "title": "In Exercises, when do we use <code class=\"code-inline tex2jax_ignore\">$blah$<\/code>, <code class=\"code-inline tex2jax_ignore\">$$blah$$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$\\dsty blah$<\/code>?",
  "body": " In Exercises, when do we use $blah$ , $$blah$$ , and $\\dsty blah$ ?   Follow this link   "
},
{
  "id": "exerciseOrProblem02",
  "level": "1",
  "url": "exerciseOrProblem02.html",
  "type": "Section",
  "number": "29.5",
  "title": "How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?",
  "body": " How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?   Follow this link   "
},
{
  "id": "footnote02",
  "level": "1",
  "url": "footnote02.html",
  "type": "Section",
  "number": "30.1",
  "title": "How do I insert a footnote?",
  "body": " How do I insert a footnote?   Follow this link   "
},
{
  "id": "referenceStyle01",
  "level": "1",
  "url": "referenceStyle01.html",
  "type": "Section",
  "number": "30.2",
  "title": "What style should we use when citing references to books, articles, or web sites?",
  "body": " What style should we use when citing references to books, articles, or web sites?  Here are some (edited) examples taken from Calculus, 3rd Edition:   Article with no author:  Page 50 \"Investigating\", US News, p. 50-52, (March 11, 1996). which, in TeX, is ``Investigating'', {\\em US News}, p. 50-52, (March 11, 1996).    Article with author:  Page 51 From D. Black and W. White, \"Energy\", Scientific American, September 1990. which, in TeX, is From D. Black and W. White, ``Energy'', {\\em Scientific American}, September 1990.    Book with no author:  Page 9 Adapted from \"Average Weight\", The World Almanac (New Jersey: Funk and Wagnalls, 1992), p. 956. which, in TeX, is Adapted from ``Average Weight'', {\\em The World Almanac} (New Jersey: Funk and Wagnalls, 1992), p. 956.    Book with author:  Page 89 Adapted from John B. West, Respitory 4th Ed. (New York: Williams, 1990). which, in TeX, is Adapted from John B. West, {\\em Respitory} 4th Ed. (New York: Williams, 1990).  Page 187 Data from John B. West in Respitory 4th Ed. (New York: Williams, 1990). which, in TeX, is Data from John B. West, {\\em Respitory} 4th Ed. (New York: Williams, 1990).    Private communication:  Page 136 Based on an idea from Casper Curjel.  Page 215 From Sally Thomas.    Web page:  www.blah, accessed on January 30, 2003.  Sometimes web-page addresses have a tilde, ~, in them. If so, see How do I get TeX to generate ~blah?    "
},
{
  "id": "generateTildeBlah02",
  "level": "1",
  "url": "generateTildeBlah02.html",
  "type": "Section",
  "number": "30.3",
  "title": "How do I get TeX to generate <code class=\"code-inline tex2jax_ignore\">~blah<\/code>?",
  "body": " How do I get TeX to generate ~blah ?   Follow this link   "
},
{
  "id": "RightsAndWrongs",
  "level": "1",
  "url": "RightsAndWrongs.html",
  "type": "Chapter",
  "number": "31",
  "title": "(**) Rights and Wrongs",
  "body": " (**) Rights and Wrongs   FIX URL  Fix table appearance       Where    Please don't do this    Please do this    Comment    Reference     Text  10ft.  10 ft  Space, but no period.   What are the abbreviations and conventions that we use for standard units like grams and miles per hour?     Text  $n^{th}$  $n^{\\rm th}$  Wrong sized superscript.   How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?     Text  This is {\\it not} true.  This is {\\em not} true.  We do not use italics.   How can I change the typeface to boldface?     Text  We call this \"completing the square\".  We call this ``completing the square''.  Double quotation marks are produced by using the prime key (') twice when opening the quotation, and the backprime key (`) twice when closing the quotation.   What are some quick pointers on TeX?     Text  1,000  1000  Numbers between -10,000 and 10,000 do not have a comma.   Do we use 1000 or 1,000?     Text  $10,000$  $10,\\!000$  There is a spacing problem after the comma.   Do we use 1000 or 1,000?     Text  .5  0.5  Decimals should be preceded by an integer.   Do we use 0.5 or .5?     Text  1\/2  $1\/2$  The divide slash is too short.   What are some quick pointers on TeX?     Text  -2  $-2$  The minus sign is too short.   What are some quick pointers on TeX?     Text  $1\/6 \\approx 0.167$  $1\/6 = 0.167$  Use equal if the approximation is correct to the number of decimal places shown when rounded.   When do I use = and when do I use approximately equal ( \\approx )?     Text  \"parts (a) and (b)\"  \"parts~(a) and~(b)\"  The ~ prevents the \"(a)\" or \"(b)\" from being printed on a new line, which would look very odd.   I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?     Text   \"left hand side\" \"co-ordinate\"    \"left-hand side\" \"coordinate\"   The standard usage consistent with previous books.      Text  \"Evaluate the following expressions\"  \"Evaluate\"  Be concise.   If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?     Text  \"In this chapter we will show ...\"  \"In this chapter we show ...\"  Do not use future tense.   May I use the future tense?     Text  The sentence \"$y = x^2+x = x(x+1)$\"  \"We have $y = x^2+x = x(x+1)$.\"  Sentence started with a variable. Sentence did not end with a period.   May I start a sentence with a variable or a number? and Do I have to end a sentence with a period, even if an equation ends the sentence?     Text  \"When $x=3$, $y=1$.\"  \"When $x=3$, we find $y=1$.\"  The two variables should be separated with text.   The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?     Text  $x^\\frac{3}{4}$  $x^{3\/4}$  Fractions in exponents should be shilled.   When do I shill and when do I use $\\frac{}{}$ ?     Text  $\\times$  $\\cdot$  $\\times$ can be confused with the variable x.   When should I use \\times and when should I use \\cdot ?     Text   $$ a=b c=d $$    \\begin{eqnarray*} a&=&b \\\\ c&=&d \\end{eqnarray*}   The incorrect version generates the equation a=bc=d.   I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?                 Exercises   \\Question { blah }    \\Question{blah} or \\Question{ blah }   When moving between MACs, Unix, and Windows the incorrect version can generate an extra line between \"\\Question\" and \"{\", which causes havoc when TeXed. The same convention applies to \"\\Answer\" and \"\\ShortAnswer\".   What is the correct format and naming convention for exercise files?     Exercises  \\Answer{} or \\ShortAnswer{}  You are joking!  Exercises without Answers and ShortAnswers are not useful.   What is the correct format and naming convention for exercise files?                 Short Answer  $\\frac{3}{4}$  $3\/4$  Fractions in short answers should be shilled.   What do I need to know about short answers?     Short Answer  \\begin{across}...\\end{across}  \\begin{enumerate}...\\end{enumerate}  Short answers should not be formatted.   What do I need to know about short answers?     Short Answer  \\ShortAnswer {no.}  \\ShortAnswer{No}  Text that starts a short answer is capitalized. Short answers do not end with a period.   What do I need to know about short answers?     Short Answer  \\ShortAnswer {Not appropriate}  \\ShortAnswer{\\noshortanswer}  The correct format generates the standard output.   What do I need to know about short answers?      You can download a summary of these Do's and Don'ts as a 1-page link missing file (updated Sunday, January 11, 2004), which, when printed out, will look impressive beside your bed.  "
},
{
  "id": "table-15",
  "level": "2",
  "url": "RightsAndWrongs.html#table-15",
  "type": "Table",
  "number": "31.0.1",
  "title": "",
  "body": "    Where    Please don't do this    Please do this    Comment    Reference     Text  10ft.  10 ft  Space, but no period.   What are the abbreviations and conventions that we use for standard units like grams and miles per hour?     Text  $n^{th}$  $n^{\\rm th}$  Wrong sized superscript.   How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?     Text  This is {\\it not} true.  This is {\\em not} true.  We do not use italics.   How can I change the typeface to boldface?     Text  We call this \"completing the square\".  We call this ``completing the square''.  Double quotation marks are produced by using the prime key (') twice when opening the quotation, and the backprime key (`) twice when closing the quotation.   What are some quick pointers on TeX?     Text  1,000  1000  Numbers between -10,000 and 10,000 do not have a comma.   Do we use 1000 or 1,000?     Text  $10,000$  $10,\\!000$  There is a spacing problem after the comma.   Do we use 1000 or 1,000?     Text  .5  0.5  Decimals should be preceded by an integer.   Do we use 0.5 or .5?     Text  1\/2  $1\/2$  The divide slash is too short.   What are some quick pointers on TeX?     Text  -2  $-2$  The minus sign is too short.   What are some quick pointers on TeX?     Text  $1\/6 \\approx 0.167$  $1\/6 = 0.167$  Use equal if the approximation is correct to the number of decimal places shown when rounded.   When do I use = and when do I use approximately equal ( \\approx )?     Text  \"parts (a) and (b)\"  \"parts~(a) and~(b)\"  The ~ prevents the \"(a)\" or \"(b)\" from being printed on a new line, which would look very odd.   I am creating an exercise that has parts (a), (b), (c), etc., and in part (c) I want to refer to part (a). How do I do that?     Text   \"left hand side\" \"co-ordinate\"    \"left-hand side\" \"coordinate\"   The standard usage consistent with previous books.      Text  \"Evaluate the following expressions\"  \"Evaluate\"  Be concise.   If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?     Text  \"In this chapter we will show ...\"  \"In this chapter we show ...\"  Do not use future tense.   May I use the future tense?     Text  The sentence \"$y = x^2+x = x(x+1)$\"  \"We have $y = x^2+x = x(x+1)$.\"  Sentence started with a variable. Sentence did not end with a period.   May I start a sentence with a variable or a number? and Do I have to end a sentence with a period, even if an equation ends the sentence?     Text  \"When $x=3$, $y=1$.\"  \"When $x=3$, we find $y=1$.\"  The two variables should be separated with text.   The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?     Text  $x^\\frac{3}{4}$  $x^{3\/4}$  Fractions in exponents should be shilled.   When do I shill and when do I use $\\frac{}{}$ ?     Text  $\\times$  $\\cdot$  $\\times$ can be confused with the variable x.   When should I use \\times and when should I use \\cdot ?     Text   $$ a=b c=d $$    \\begin{eqnarray*} a&=&b \\\\ c&=&d \\end{eqnarray*}   The incorrect version generates the equation a=bc=d.   I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?                 Exercises   \\Question { blah }    \\Question{blah} or \\Question{ blah }   When moving between MACs, Unix, and Windows the incorrect version can generate an extra line between \"\\Question\" and \"{\", which causes havoc when TeXed. The same convention applies to \"\\Answer\" and \"\\ShortAnswer\".   What is the correct format and naming convention for exercise files?     Exercises  \\Answer{} or \\ShortAnswer{}  You are joking!  Exercises without Answers and ShortAnswers are not useful.   What is the correct format and naming convention for exercise files?                 Short Answer  $\\frac{3}{4}$  $3\/4$  Fractions in short answers should be shilled.   What do I need to know about short answers?     Short Answer  \\begin{across}...\\end{across}  \\begin{enumerate}...\\end{enumerate}  Short answers should not be formatted.   What do I need to know about short answers?     Short Answer  \\ShortAnswer {no.}  \\ShortAnswer{No}  Text that starts a short answer is capitalized. Short answers do not end with a period.   What do I need to know about short answers?     Short Answer  \\ShortAnswer {Not appropriate}  \\ShortAnswer{\\noshortanswer}  The correct format generates the standard output.   What do I need to know about short answers?     "
},
{
  "id": "creatingChapter01",
  "level": "1",
  "url": "creatingChapter01.html",
  "type": "Section",
  "number": "32.1",
  "title": "How do I create a Chapter?",
  "body": " How do I create a Chapter?  First construct a master TeX file, with the following structure.  \\documentclass{astex} \\asformat{MULTI} \\noautopage \\raggedbottom \\showfilename \\printeverything \\begin{document} \\setcounter{page}{1} \\chapter{1}{Sample Chapter One} \\glabel{sampleone} \\secinput{samplesec1}{Sample Section 1} \\exercises<filename> \\end{document}  where \"filename\" is described in How do I put together a collection of exercises? .  Then you need to construct a file named \"samplesec1.tex\", with the contents of Sample Section 1.  "
},
{
  "id": "capitalizingHeadings02",
  "level": "1",
  "url": "capitalizingHeadings02.html",
  "type": "Section",
  "number": "32.2",
  "title": "What is the convention for capitalizing headings of chapters, sections, and subsections?",
  "body": " What is the convention for capitalizing headings of chapters, sections, and subsections?   Follow this link   "
},
{
  "id": "shortAnswers02",
  "level": "1",
  "url": "shortAnswers02.html",
  "type": "Section",
  "number": "33.1",
  "title": "What do I need to know about short answers?",
  "body": " What do I need to know about short answers?   Follow this link   "
},
{
  "id": "dollarSign03",
  "level": "1",
  "url": "dollarSign03.html",
  "type": "Section",
  "number": "33.2",
  "title": "In Exercises, when do we use <code class=\"code-inline tex2jax_ignore\">$blah$<\/code>, <code class=\"code-inline tex2jax_ignore\">$$blah$$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$\\dsty blah$<\/code>?",
  "body": " In Exercises, when do we use $blah$ , $$blah$$ , and $\\dsty blah$ ?   Follow this link   "
},
{
  "id": "exactAnswer03",
  "level": "1",
  "url": "exactAnswer03.html",
  "type": "Section",
  "number": "33.3",
  "title": "The exact answer to one of my exercises is <code class=\"code-inline tex2jax_ignore\">$5\/\\pi$<\/code> inches. Should I also give the calculator value of 1.592?",
  "body": " The exact answer to one of my exercises is $5\/\\pi$ inches. Should I also give the calculator value of 1.592?   Follow this link   "
},
{
  "id": "answersAndShortAnswers02",
  "level": "1",
  "url": "answersAndShortAnswers02.html",
  "type": "Section",
  "number": "33.4",
  "title": "Is it OK to submit exercises without Answers or ShortAnswers?",
  "body": " Is it OK to submit exercises without Answers or ShortAnswers?   Follow this link   "
},
{
  "id": "answersOrShortAnswersMissing02",
  "level": "1",
  "url": "answersOrShortAnswersMissing02.html",
  "type": "Section",
  "number": "33.5",
  "title": "When checking exercises, what do I do if an Answer or ShortAnswer is missing?",
  "body": " When checking exercises, what do I do if an Answer or ShortAnswer is missing?   Follow this link   "
},
{
  "id": "figureInShortAnswer03",
  "level": "1",
  "url": "figureInShortAnswer03.html",
  "type": "Section",
  "number": "33.6",
  "title": "How do I put a figure into the short answer of an exercise or problem?",
  "body": " How do I put a figure into the short answer of an exercise or problem?   Follow this link   "
},
{
  "id": "unitsInShortAnswer02",
  "level": "1",
  "url": "unitsInShortAnswer02.html",
  "type": "Section",
  "number": "33.7",
  "title": "If in the short answers I have the choice between including or omitting units, what should I do?  (For example, if a  problem ask \"How many ships are left?\", should the short answer be \"32\" or \"32 ships\"?)",
  "body": " If in the short answers I have the choice between including or omitting units, what should I do? (For example, if a problem ask \"How many ships are left?\", should the short answer be \"32\" or \"32 ships\"?)   Follow this link   "
},
{
  "id": "printEverything03",
  "level": "1",
  "url": "printEverything03.html",
  "type": "Section",
  "number": "33.8",
  "title": "How do I print the questions, the answers, and the short answers for the exercises?",
  "body": " How do I print the questions, the answers, and the short answers for the exercises?   Follow this link   "
},
{
  "id": "printOnlyExerciseQuestion03",
  "level": "1",
  "url": "printOnlyExerciseQuestion03.html",
  "type": "Section",
  "number": "33.9",
  "title": "How do I print only the questions (without the answers or short answers) for the exercises?",
  "body": " How do I print only the questions (without the answers or short answers) for the exercises?   Follow this link   "
},
{
  "id": "figuresAndTablesLabel02",
  "level": "1",
  "url": "figuresAndTablesLabel02.html",
  "type": "Section",
  "number": "33.10",
  "title": "What is the preferred convention for labelling figures and tables in Exercises?",
  "body": " What is the preferred convention for labelling figures and tables in Exercises?   Follow this link   "
},
{
  "id": "tableLabels02",
  "level": "1",
  "url": "tableLabels02.html",
  "type": "Section",
  "number": "33.11",
  "title": "When do I put labels (numbers) and captions on tables?",
  "body": " When do I put labels (numbers) and captions on tables?   Follow this link   "
},
{
  "id": "useCalculatorOrSoftware",
  "level": "1",
  "url": "useCalculatorOrSoftware.html",
  "type": "Section",
  "number": "34.1",
  "title": "What words should we use if we want students to use a calculator or software to do an exercise?",
  "body": " What words should we use if we want students to use a calculator or software to do an exercise?  Use \"use a calculator or computer\". However, in general we should not be telling people to use calculators\/computers; they should be deciding that themselves. Also different faculty choose different things.  "
},
{
  "id": "thousandNotation02",
  "level": "1",
  "url": "thousandNotation02.html",
  "type": "Section",
  "number": "34.2",
  "title": "Do we use 1000 or 1,000?",
  "body": " Do we use 1000 or 1,000?   Follow this link   "
},
{
  "id": "decimalsNotation02",
  "level": "1",
  "url": "decimalsNotation02.html",
  "type": "Section",
  "number": "34.3",
  "title": "Do we use 0.5 or .5?",
  "body": " Do we use 0.5 or .5?   Follow this link   "
},
{
  "id": "exactAnswer04",
  "level": "1",
  "url": "exactAnswer04.html",
  "type": "Section",
  "number": "34.4",
  "title": "The exact answer to one of my exercises is <code class=\"code-inline tex2jax_ignore\">$5\/\\pi$<\/code> inches. Should I also give the calculator value of 1.592?",
  "body": " The exact answer to one of my exercises is $5\/\\pi$ inches. Should I also give the calculator value of 1.592?   Follow this link   "
},
{
  "id": "decimalPlacesInAnswer02",
  "level": "1",
  "url": "decimalPlacesInAnswer02.html",
  "type": "Section",
  "number": "34.5",
  "title": "How many decimal places should I keep in a numerical answer?",
  "body": " How many decimal places should I keep in a numerical answer?   Follow this link   "
},
{
  "id": "footnotePosition02",
  "level": "1",
  "url": "footnotePosition02.html",
  "type": "Section",
  "number": "34.6",
  "title": "Do I put a footnote before or after a punctuation mark?",
  "body": " Do I put a footnote before or after a punctuation mark?   Follow this link   "
},
{
  "id": "referenceStyle02",
  "level": "1",
  "url": "referenceStyle02.html",
  "type": "Section",
  "number": "34.7",
  "title": "What style should we use when citing references to books, articles, or web sites?",
  "body": " What style should we use when citing references to books, articles, or web sites?   Follow this link   "
},
{
  "id": "horizontalLineAfterExample",
  "level": "1",
  "url": "horizontalLineAfterExample.html",
  "type": "Section",
  "number": "34.8",
  "title": "Sometimes there is a horizontal line after an example, and sometimes there is not. What is the convention?",
  "body": " Sometimes there is a horizontal line after an example, and sometimes there is not. What is the convention?  The horizontal line on the right at the end of a solution is omitted if the solution is followed immediately by an example (since then the horizontal line ending the solution would look bad next to the horizontal line on the left starting an example ... this was a style decision of Wiley many years ago).  "
},
{
  "id": "shilling05",
  "level": "1",
  "url": "shilling05.html",
  "type": "Section",
  "number": "34.9",
  "title": "What is shilling?",
  "body": " What is shilling?   Follow this link   "
},
{
  "id": "shillVsFrac05",
  "level": "1",
  "url": "shillVsFrac05.html",
  "type": "Section",
  "number": "34.10",
  "title": "When do I shill and when do I use <code class=\"code-inline tex2jax_ignore\">$\\frac{}{}$<\/code>?",
  "body": " When do I shill and when do I use $\\frac{}{}$ ?   Follow this link   "
},
{
  "id": "sentenceStart02",
  "level": "1",
  "url": "sentenceStart02.html",
  "type": "Section",
  "number": "34.11",
  "title": "May I start a sentence with a variable or a number?",
  "body": " May I start a sentence with a variable or a number?   Follow this link   "
},
{
  "id": "angleInRadians01",
  "level": "1",
  "url": "angleInRadians01.html",
  "type": "Section",
  "number": "34.12",
  "title": "Do I need to specify that the units of an angle are in radians?",
  "body": " Do I need to specify that the units of an angle are in radians?  No, unless you are asking a question that involves changing units between radians and degrees.  "
},
{
  "id": "variablesSeparetedByText02",
  "level": "1",
  "url": "variablesSeparetedByText02.html",
  "type": "Section",
  "number": "34.13",
  "title": "The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?",
  "body": " The authorities get upset if I write something like: Since the leading term of the polynomial is $x^4$, $y$ goes to infinity. What should I have written?   Follow this link   "
},
{
  "id": "futureTense",
  "level": "1",
  "url": "futureTense.html",
  "type": "Section",
  "number": "34.14",
  "title": "May I use the future tense?",
  "body": " May I use the future tense?  No! No! No!  In place of \"In this chapter we will show ...\" use \"In this chapter we show ...\" .  "
},
{
  "id": "abbreviationStandarUnits02",
  "level": "1",
  "url": "abbreviationStandarUnits02.html",
  "type": "Section",
  "number": "34.15",
  "title": "What are the abbreviations and conventions that we use for standard units like grams and miles per hour?",
  "body": " What are the abbreviations and conventions that we use for standard units like grams and miles per hour?   Follow this link   "
},
{
  "id": "commonConstants01",
  "level": "1",
  "url": "commonConstants01.html",
  "type": "Section",
  "number": "34.16",
  "title": "What are the values that we use for common constants like <em class=\"emphasis\">g<\/em>, the half-life of carbon-14, and the radius of the earth?",
  "body": " What are the values that we use for common constants like g , the half-life of carbon-14, and the radius of the earth?     g  32 ft\/sec^2    g  9.8 m\/sec^2    half-life of carbon-14  5730 years    radius of earth  3960 miles    radius of earth  6400 km     "
},
{
  "id": "table-16",
  "level": "2",
  "url": "commonConstants01.html#table-16",
  "type": "Table",
  "number": "34.16.1",
  "title": "",
  "body": "   g  32 ft\/sec^2    g  9.8 m\/sec^2    half-life of carbon-14  5730 years    radius of earth  3960 miles    radius of earth  6400 km    "
},
{
  "id": "specialReference03",
  "level": "1",
  "url": "specialReference03.html",
  "type": "Section",
  "number": "34.17",
  "title": "I want to refer to something like City A and City B.  Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?",
  "body": " I want to refer to something like City A and City B. Do I just type it that way, or are the A and B put into a special font, say $A$ and $B$?   Follow this link   "
},
{
  "id": "range02",
  "level": "1",
  "url": "range02.html",
  "type": "Section",
  "number": "34.18",
  "title": "The three expressions <code class=\"code-inline tex2jax_ignore\">$x > 1$<\/code>, <code class=\"code-inline tex2jax_ignore\">$1 < x < \\infty$<\/code>, and <code class=\"code-inline tex2jax_ignore\">$(1, \\infty)$<\/code> are mathematically equivalent.  Which one do we use?",
  "body": " The three expressions $x > 1$ , $1 < x < \\infty$ , and $(1, \\infty)$ are mathematically equivalent. Which one do we use?   Follow this link   "
},
{
  "id": "degreeSymbol02",
  "level": "1",
  "url": "degreeSymbol02.html",
  "type": "Section",
  "number": "34.19",
  "title": "How do I enter the degree symbol, for example 76 degrees Fahrenheit?",
  "body": " How do I enter the degree symbol, for example 76 degrees Fahrenheit?   Follow this link   "
},
{
  "id": "rightArrow03",
  "level": "1",
  "url": "rightArrow03.html",
  "type": "Section",
  "number": "34.20",
  "title": "May I use the implies symbol ==&gt; (<code class=\"code-inline tex2jax_ignore\">$\\Rightarrow$<\/code>)?",
  "body": " May I use the implies symbol ==> ( $\\Rightarrow$ )?   Follow this link   "
},
{
  "id": "sinNotation02",
  "level": "1",
  "url": "sinNotation02.html",
  "type": "Section",
  "number": "34.21",
  "title": "Do I use <code class=\"code-inline tex2jax_ignore\">$\\sin x$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\sin (x)$<\/code>?",
  "body": " Do I use $\\sin x$ or $\\sin (x)$ ?   Follow this link   "
},
{
  "id": "rootVsZero03",
  "level": "1",
  "url": "rootVsZero03.html",
  "type": "Section",
  "number": "34.22",
  "title": "When do I use root and when do I use zero?",
  "body": " When do I use root and when do I use zero?   Follow this link   "
},
{
  "id": "symmetricAcrossVsAbout02",
  "level": "1",
  "url": "symmetricAcrossVsAbout02.html",
  "type": "Section",
  "number": "34.23",
  "title": "Do I use symmetric across the <em class=\"emphasis\">x<\/em>-axis, or symmetric about the <em class=\"emphasis\">x<\/em>-axis?",
  "body": " Do I use symmetric across the x -axis, or symmetric about the x -axis?   Follow this link   "
},
{
  "id": "equalVsApproEqual02",
  "level": "1",
  "url": "equalVsApproEqual02.html",
  "type": "Section",
  "number": "34.24",
  "title": "When do I use = and when do I use approximately equal (<code class=\"code-inline tex2jax_ignore\">\\approx<\/code>)?",
  "body": " When do I use = and when do I use approximately equal ( \\approx )?   Follow this link   "
},
{
  "id": "units01",
  "level": "1",
  "url": "units01.html",
  "type": "Section",
  "number": "34.25",
  "title": "I’m confused about units. Are the units of <em class=\"emphasis\">g<\/em> acceleration or ft\/sec^2?",
  "body": " I'm confused about units. Are the units of g acceleration or ft\/sec^2?  Units refer to how something is measured, so feet, seconds, and ft\/sec^2 are units, but distance, time, and acceleration are dimensions. Also avoid using \"units of\" if possible. For example, \"s is distance in feet, t is time in seconds\" is better than \"s is distance in units of feet, t is time in units of seconds\".  "
},
{
  "id": "multipliedTogetherRepeatedly02",
  "level": "1",
  "url": "multipliedTogetherRepeatedly02.html",
  "type": "Section",
  "number": "34.26",
  "title": "To display <code class=\"code-inline tex2jax_ignore\">$a$<\/code> multiplied together repeatedly, do I use <code class=\"code-inline tex2jax_ignore\">$a\\cdot a\\cdot a\\cdot\\cdots\\cdot a$<\/code> or <code class=\"code-inline tex2jax_ignore\">$a\\cdot a\\cdot a\\cdots a$<\/code>?",
  "body": " To display $a$ multiplied together repeatedly, do I use $a\\cdot a\\cdot a\\cdot\\cdots\\cdot a$ or $a\\cdot a\\cdot a\\cdots a$ ?   Follow this link   "
},
{
  "id": "latinAbbreviations03",
  "level": "1",
  "url": "latinAbbreviations03.html",
  "type": "Section",
  "number": "34.27",
  "title": "Do we italicize Latin abbreviations such as e.g. and i.e.?",
  "body": " Do we italicize Latin abbreviations such as e.g. and i.e.?   Follow this link   "
},
{
  "id": "capitalizingHeadings03",
  "level": "1",
  "url": "capitalizingHeadings03.html",
  "type": "Section",
  "number": "34.28",
  "title": "What is the convention for capitalizing headings of chapters, sections, and subsections?",
  "body": " What is the convention for capitalizing headings of chapters, sections, and subsections?   Follow this link   "
},
{
  "id": "formattingCommands02",
  "level": "1",
  "url": "formattingCommands02.html",
  "type": "Section",
  "number": "34.29",
  "title": "May I use formatting commands (like  \\vspace, \\hspace, \\smallskip, \\\\, etc.) in the text portion of my file?",
  "body": " May I use formatting commands (like \\vspace, \\hspace, \\smallskip, \\\\, etc.) in the text portion of my file?   Follow this link   "
},
{
  "id": "submitTroubles02",
  "level": "1",
  "url": "submitTroubles02.html",
  "type": "Section",
  "number": "34.30",
  "title": "What are the things people seem have trouble with when they submit?",
  "body": " What are the things people seem have trouble with when they submit?   Follow this link   "
},
{
  "id": "referencesPrintedText01",
  "level": "1",
  "url": "referencesPrintedText01.html",
  "type": "Section",
  "number": "34.31",
  "title": "How do I reference existing theorems, chapters, sections, examples, exercises, and problems, in the printed calculus text that we are editing?",
  "body": " How do I reference existing theorems, chapters, sections, examples, exercises, and problems, in the printed calculus text that we are editing?  Use \\ref{blah} where blah is the hard-coded reference. For example, to refer to Example 3 on page 41 of Section 1.6 of single Calculus, 3rd edition, use  \\ref{Single 3e Chapter 1, page 41, Example 3, Section 1.6}  This will TeX as ?? in the printed text and alert Elliot to make the appropriate changes.  "
},
{
  "id": "conciseVsWording03",
  "level": "1",
  "url": "conciseVsWording03.html",
  "type": "Section",
  "number": "34.32",
  "title": "If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?",
  "body": " If I have the choice between wording an exercise in a concise style or in a verbose style, which is preferable?   Follow this link   "
},
{
  "id": "theoremsName",
  "level": "1",
  "url": "theoremsName.html",
  "type": "Section",
  "number": "34.33",
  "title": "Do I write Stokes’ Theorem or Stokes’s Theorem?",
  "body": " Do I write Stokes' Theorem or Stokes's Theorem?  A proper noun that ends in s (such as Stokes or Pythagoras) has only a single apostrophe added to make it possessive. Thus, we use Stokes' Theorem and not Stokes's Theorem.  "
},
{
  "id": "variableOrFunction",
  "level": "1",
  "url": "variableOrFunction.html",
  "type": "Section",
  "number": "34.34",
  "title": "When should I write <code class=\"code-inline tex2jax_ignore\">V'(t)<\/code> and when should I write <code class=\"code-inline tex2jax_ignore\">dV\/dt<\/code>?",
  "body": " When should I write V'(t) and when should I write dV\/dt ?  If V is a variable, then you should write dV\/dt , but not V'(t) . If V is a function, meaning V(t) gives values of the dependent variable, then you should write V'(t) , but not dV\/dt .  "
},
{
  "id": "timesVsDot",
  "level": "1",
  "url": "timesVsDot.html",
  "type": "Section",
  "number": "34.35",
  "title": "When should I use <code class=\"code-inline tex2jax_ignore\">\\times<\/code> and when should I use <code class=\"code-inline tex2jax_ignore\">\\cdot<\/code>?",
  "body": " When should I use \\times and when should I use \\cdot ?  Don't use \\times except in very rare cases; use \\cdot . \\times often gets mixed up with x , especially when students copy it in their own handwriting.  "
},
{
  "id": "periods",
  "level": "1",
  "url": "periods.html",
  "type": "Section",
  "number": "34.36",
  "title": "Do I have to end a sentence with a period, even if an equation ends the sentence?",
  "body": " Do I have to end a sentence with a period, even if an equation ends the sentence?  Yes. Yes. Yes.  "
},
{
  "id": "xasis",
  "level": "1",
  "url": "xasis.html",
  "type": "Section",
  "number": "34.37",
  "title": "Do we use <code class=\"code-inline tex2jax_ignore\">$x-$axis<\/code> or <code class=\"code-inline tex2jax_ignore\">$x$-axis<\/code>?",
  "body": " Do we use $x-$axis or $x$-axis ?   $x$-axis , otherwise the hyphen becomes a minus sign when TeXed. The same is true of $x$-intercept , $x$-values , etc.  "
},
{
  "id": "orVsAndInSolutions02",
  "level": "1",
  "url": "orVsAndInSolutions02.html",
  "type": "Section",
  "number": "34.38",
  "title": "Do we say \"The solutions are $x = 1$ and $x = 2$,\" or \"The solutions are $x = 1$ or $x =2$\"?",
  "body": " Do we say \"The solutions are $x = 1$ and $x = 2$,\" or \"The solutions are $x = 1$ or $x =2$\"?   Follow this link   "
},
{
  "id": "dollarsNotation",
  "level": "1",
  "url": "dollarsNotation.html",
  "type": "Section",
  "number": "34.39",
  "title": "Do I use \"$P\" or \"P dollars\"?",
  "body": " Do I use \"$P\" or \"P dollars\"?  \"P dollars\" is preferable. However, either \"$2\" or \"2 dollars\" is fine.  "
},
{
  "id": "commentForOtherAuthor",
  "level": "1",
  "url": "commentForOtherAuthor.html",
  "type": "Section",
  "number": "34.40",
  "title": "How can I include a comment about a topic for other authors to read?",
  "body": " How can I include a comment about a topic for other authors to read?  First make sure the latest macros are installed.  The command \\editcomment{title}{comment} will put a boxed comment in the typeset document. The usage is something like this: \\editcomment{Eric 2004\/08\/11}{I just love the new edit comment command!} which generates     Comments are displayed by default. A warning will be printed to the log for every comment that is displayed, including the page number of its occurrence.  The command \\dontshoweditcomments has the effect of suppressing all comments. A warning will be printed to the log for every comment that is suppressed.  The command \\showeditcomments forces comments to be displayed, and can be used in conjunction with \\dontshoweditcomments to toggle the display of comments in a particular piece of text.  "
},
{
  "id": "comment",
  "level": "2",
  "url": "commentForOtherAuthor.html#comment",
  "type": "Figure",
  "number": "34.40.1",
  "title": "",
  "body": "  "
},
{
  "id": "fontForNames",
  "level": "1",
  "url": "fontForNames.html",
  "type": "Section",
  "number": "34.41",
  "title": "What font do I use for A when I write \"Matrix A\"?",
  "body": " What font do I use for A when I write \"Matrix A\"?  Use \"Matrix $\\mtx{A}$ is very interesting, but $2\\mtx{A}$ is twice as interesting\".  "
},
{
  "id": "contractions",
  "level": "1",
  "url": "contractions.html",
  "type": "Section",
  "number": "34.42",
  "title": "Should I use contractions, such as \"didn’t\"?",
  "body": " Should I use contractions, such as \"didn't\"?  Not if you want the authorities to be nice to you. We never use contractions. Always write in full, so \"didn't\" should be \"did not\".  "
},
{
  "id": "capitalLetters",
  "level": "1",
  "url": "capitalLetters.html",
  "type": "Section",
  "number": "34.43",
  "title": "If we ask a question like: \"Is Rx linear in R? In x?\" should the second \"in\" start with a capital letter?",
  "body": " If we ask a question like: \"Is Rx linear in R? In x?\" should the second \"in\" start with a capital letter?  Yes.  "
},
{
  "id": "punctuationInlineMath",
  "level": "1",
  "url": "punctuationInlineMath.html",
  "type": "Section",
  "number": "34.44",
  "title": "For inline mathematics, should punctuation go inside or outside the dollar signs, e.g. \"$a$.\" or \"$a.$\"?",
  "body": " For inline mathematics, should punctuation go inside or outside the dollar signs, e.g. \"$a$.\" or \"$a.$\"?  Always outside, so \"$a$.\" not \"$a.$\".  "
},
{
  "id": "tilde",
  "level": "1",
  "url": "tilde.html",
  "type": "Section",
  "number": "34.45",
  "title": "When I use a tilde, \"~\", for example in \"part~(a)\" or \"Example<code class=\"code-inline tex2jax_ignore\">~\\ref{ex:blah}<\/code>\", why don’t I need to precede it by a space?",
  "body": " When I use a tilde, \"~\", for example in \"part~(a)\" or \"Example ~\\ref{ex:blah} \", why don't I need to precede it by a space?  The tilde provides a space, but tells TeX not to break the line there.  "
},
{
  "id": "functionFromAGraph",
  "level": "1",
  "url": "functionFromAGraph.html",
  "type": "Section",
  "number": "34.46",
  "title": "Some of the problems ask for a function to be estimated from a graph. I get the answer $y=4x+3$, but other answers close to this are equally correct. How do I write the short answer for this?",
  "body": " Some of the problems ask for a function to be estimated from a graph. I get the answer $y=4x+3$, but other answers close to this are equally correct. How do I write the short answer for this?  Use \"Estimating coefficients $y=4x+3$\".  "
},
{
  "id": "quantitiesFromAGraph",
  "level": "1",
  "url": "quantitiesFromAGraph.html",
  "type": "Section",
  "number": "34.47",
  "title": "Some of the problems ask for the value of quantities to be estimated from a graph.  I get the answer 4, but other answers close to 4 are equally correct.  How do I write the short answer for this?",
  "body": " Some of the problems ask for the value of quantities to be estimated from a graph. I get the answer 4, but other answers close to 4 are equally correct. How do I write the short answer for this?  Use \"About 0\".  "
},
{
  "id": "hintWileyPlus",
  "level": "1",
  "url": "hintWileyPlus.html",
  "type": "Section",
  "number": "34.48",
  "title": "How do I add a hint to a problem for WileyPLUS?",
  "body": " How do I add a hint to a problem for WileyPLUS?  TBA  "
},
{
  "id": "newProblemsInApplied",
  "level": "1",
  "url": "newProblemsInApplied.html",
  "type": "Section",
  "number": "34.49",
  "title": "In Applied, there is a new method to save and commit New Problems. What is it?",
  "body": " In Applied, there is a new method to save and commit New Problems. What is it?  Let's assume you are creating NPs for Sections 3.1 and 3.3, and that your initials are dsl.    First do an SVN Update to make sure you have the latest files for Applied.    Navigate to Chapter 3 in Applied (BCHAP3). Create your NPs there, labelling them 3-1dslaqnp01.tex, 3-1dslaqnp02.tex, ..., 3-3dslaqnp01.tex, 3-3dslaqnp02.tex, ...    Create\/Edit the np-file in the BCHAP3 folder, that is tied to the section. In this case they would be ex-np3-1.tex and ex-np3-3.tex. For example, ex-np3-3.tex, may look something like this  \"\\begin{exgroup}[1] \\begin{qset}[ins3-3aq1-28] \\qinput{3-3dslaqnp01} \\qinput{3-3dslaqnp03} \\qinput{3-3dslaqnp04} \\qinput{3-3dslaqnp05} \\qinput{3-3dslaqnp06} \\qinput{3-3dslaqnp08} \\end{qset} \\begin{qset}[ins3-3dsl2] \\qinput{3-3dslaqnp02} \\qinput{3-3dslaqnp07} \\end{qset} \\qinput{3-4w70} \\qinput{3-4w71} \\qinput{3-miscw94} \\end{exgroup}\"  This contains the filenames of 8 nps created by dsl, and three from single.    Go to your folder in BUSNEWPROBS, BUSNEWPROBS\/Lovelock\/ and create another ex-np file for ALL the dsl NPs, called ex-npLovelock5.tex. This looks like ex-np3-3.tex, except it will also contain the filenames for Section 3.1, but will not contain the filenames from single. In other words it is an ex-file of only those NPs created by dsl.    Commit all these files via SVN.    "
},
{
  "id": "partOfExerciseInAppliedFromSingle",
  "level": "1",
  "url": "partOfExerciseInAppliedFromSingle.html",
  "type": "Section",
  "number": "34.50",
  "title": "In Applied, I want to use part of an Exercise\/Problem that is in Single. How do I do that?",
  "body": " In Applied, I want to use part of an Exercise\/Problem that is in Single. How do I do that?  Go to the Exercise\/Problem that is in Single and edit it by using the \\Bus command. For example, say the Exercise\/Problem in Single, looked like this:  \"Find the derivative each of the following: (a) Blah (b) BlahBlah (c) BlahBlahBlah\"  and you don't want to include Part (b). To do this, edit the tex file to read:  \"Find the derivative of each of the following: (a) Blah \\Bus{(b) BlahBlah}{} (c) BlahBlahBlah\"  Don't forget to do the same thing to the ANSWER and SHORT ANSWER.  On the other hand, if you want to replace Part (b) with \"NewBlah\" then edit the tex file to read:  \"Find the derivative of each of the following: (a) Blah (b) \\Bus{BlahBlah}{NewBlah} (c) BlahBlahBlah\"  Then email Elliot telling him what you have done.  "
},
{
  "id": "exerciseInAppliedFromSingle",
  "level": "1",
  "url": "exerciseInAppliedFromSingle.html",
  "type": "Section",
  "number": "34.51",
  "title": "In Applied, I want to use an Exercise\/Problem that is in Single. Do I just copy it to Applied?",
  "body": " In Applied, I want to use an Exercise\/Problem that is in Single. Do I just copy it to Applied?  No. Just include the Exercise\/Problem's filename in the Applied ex-file.  "
},
{
  "id": "exerciseOrProblem03",
  "level": "1",
  "url": "exerciseOrProblem03.html",
  "type": "Section",
  "number": "34.52",
  "title": "How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?",
  "body": " How do I specify that a problem that I am submitting is intended to be a \"Problem\" rather than an \"Exercise\"?   Follow this link   "
},
{
  "id": "mathematicalSymbolsInHeadings01",
  "level": "1",
  "url": "mathematicalSymbolsInHeadings01.html",
  "type": "Section",
  "number": "35.1",
  "title": "I am trying to create tables where the headings are mathematical symbols, e.g. <code class=\"code-inline tex2jax_ignore\">$\\times 2$ & $+4$ & $\\div 2$<\/code>.  The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol.  Any suggestions?",
  "body": " I am trying to create tables where the headings are mathematical symbols, e.g. $\\times 2$ & $+4$ & $\\div 2$ . The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol. Any suggestions?  This is probably because the meaning of the \\div macro has been changed in our macros for the multivariable book, as in \\div, \\grad, and \\curl . So you have to define another macro that accesses this symbol. You can do this by putting  \\mathchardef\\mydiv=\"3204  in the preamble of your file. Then the macro \\mydiv will give the division symbol. Of course, you can use any abbreviation you want instead of mydiv, as long as it's not already defined.  However, if you are using the Algebra macros, via \\asformt{ALGEBRA} , \\div produces the division symbol.  "
},
{
  "id": "printSpecialCharacters01",
  "level": "1",
  "url": "printSpecialCharacters01.html",
  "type": "Section",
  "number": "35.2",
  "title": "How do I print the TeX special characters: <code class=\"code-inline tex2jax_ignore\">$, &, %, #, _,{, and }<\/code>?",
  "body": " How do I print the TeX special characters: $, &, %, #, _,{, and } ?  Precede each of them by the \\ symbol. Thus, \\$, \\&, \\%, \\#, \\_, \\{, and \\}.  "
},
{
  "id": "commandsToGetDivGradCurl01",
  "level": "1",
  "url": "commandsToGetDivGradCurl01.html",
  "type": "Section",
  "number": "35.3",
  "title": "What commands do I use to get <em class=\"emphasis\">div<\/em>, <em class=\"emphasis\">grad<\/em>, and <em class=\"emphasis\">curl<\/em>?",
  "body": " What commands do I use to get div , grad , and curl ?      To produce this    Enter this     div  \\div    grad  \\grad    curl  \\curl     "
},
{
  "id": "table-17",
  "level": "2",
  "url": "commandsToGetDivGradCurl01.html#table-17",
  "type": "Table",
  "number": "35.3.1",
  "title": "",
  "body": "    To produce this    Enter this     div  \\div    grad  \\grad    curl  \\curl    "
},
{
  "id": "degreeSymbol03",
  "level": "1",
  "url": "degreeSymbol03.html",
  "type": "Section",
  "number": "35.4",
  "title": "How do I enter the degree symbol, for example 76 degrees Fahrenheit?",
  "body": " How do I enter the degree symbol, for example 76 degrees Fahrenheit?   Follow this link   "
},
{
  "id": "Kelvin",
  "level": "1",
  "url": "Kelvin.html",
  "type": "Section",
  "number": "35.5",
  "title": "Do I use degrees Kelvin, or just Kelvin?",
  "body": " Do I use degrees Kelvin, or just Kelvin?  The correct usage is to omit the word \"degrees\". Then Kelvin is abbreviated K, but if spelled out is written \"kelvins\". Thus 76 K and 76 kelvins are correct. See http:\/\/mathforum.org\/library\/drmath\/view\/60409.html .  "
},
{
  "id": "poundSymbol01",
  "level": "1",
  "url": "poundSymbol01.html",
  "type": "Section",
  "number": "35.6",
  "title": "How do I enter the UK counterpart of $, namely the UK pound symbol, £?",
  "body": " How do I enter the UK counterpart of $, namely the UK pound symbol, £?   \\pounds   "
},
{
  "id": "equalsSymbol",
  "level": "1",
  "url": "equalsSymbol.html",
  "type": "Section",
  "number": "35.7",
  "title": "How do I enter the equals symbol with a question mark over it?",
  "body": " How do I enter the equals symbol with a question mark over it?  Use $\\qeq$. However, you must have our latest macros for this to work.  "
},
{
  "id": "rightArrow04",
  "level": "1",
  "url": "rightArrow04.html",
  "type": "Section",
  "number": "35.8",
  "title": "May I use the implies symbol ==&gt; (<code class=\"code-inline tex2jax_ignore\">$\\Rightarrow$<\/code>)?",
  "body": " May I use the implies symbol ==> ( $\\Rightarrow$ )?   Follow this link   "
},
{
  "id": "subscripts05",
  "level": "1",
  "url": "subscripts05.html",
  "type": "Section",
  "number": "35.9",
  "title": "When I use  word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large. What should I be using?   Follow this link   "
},
{
  "id": "tableFormat02",
  "level": "1",
  "url": "tableFormat02.html",
  "type": "Section",
  "number": "36.1",
  "title": "What is the preferred formatting for a table?",
  "body": " What is the preferred formatting for a table?   Follow this link   "
},
{
  "id": "figuresAndTablesLabel03",
  "level": "1",
  "url": "figuresAndTablesLabel03.html",
  "type": "Section",
  "number": "36.2",
  "title": "What is the preferred convention for labelling figures and tables in Exercises?",
  "body": " What is the preferred convention for labelling figures and tables in Exercises?   Follow this link   "
},
{
  "id": "tableLabels03",
  "level": "1",
  "url": "tableLabels03.html",
  "type": "Section",
  "number": "36.3",
  "title": "When do I put labels (numbers) and captions on tables?",
  "body": " When do I put labels (numbers) and captions on tables?   Follow this link   "
},
{
  "id": "insertEntriesIntoTable",
  "level": "1",
  "url": "insertEntriesIntoTable.html",
  "type": "Section",
  "number": "36.4",
  "title": "Is there an easier way to insert entries into a table?",
  "body": " Is there an easier way to insert entries into a table?   Fix URL   If you are using WinEdt you can install a plugin that helps with this. However, this only creates the entries of the table, not the pieces that surround it. These you must add by hand. See What is the preferred formatting for a table? for the correct format.  "
},
{
  "id": "captionsOnATable01",
  "level": "1",
  "url": "captionsOnATable01.html",
  "type": "Section",
  "number": "36.5",
  "title": "Should I put a caption on a table?",
  "body": " Should I put a caption on a table?  If the table is in the text then it must have a caption. If it is in the question part of an exercise\/problem then it must not. See When do I put labels (numbers) and captions on tables? and What is the preferred formatting for a table? .  "
},
{
  "id": "tableWidth",
  "level": "1",
  "url": "tableWidth.html",
  "type": "Section",
  "number": "36.6",
  "title": "How wide can I make a table?",
  "body": " How wide can I make a table?  Tables in the exercises should be no wider that 3 inches; in the text no wider that 6 inches. To reduce a table to fit, either make it less wide by deleting part of it, or divide it into multiple lines along the lines of the following multi-row table.  \\begin{calctabular}{l|c|c|c|c|c|c|c} Year & 1954 & 1954 & 1957 & 1958 & 1962 & 1964 & 1965 \\\\ \\hline Time (min:sec) & 3:59.4 & 3:58.0 & 3:57.2 & 3:54.5 & 3:54.4 & 3:54.1 & 3:53.6 \\\\ \\hline\\hline\\hline\\hline Year & 1966 & 1967 & 1975 & 1975 & 1979 & 1980 & \\\\ \\hline Time (min:sec) & 3:51.3 & 3:51.1 & 3:51.0 & 3:49.4 & 3:49.0 & 3:48.8 & \\\\ \\hline\\hline\\hline\\hline Year & 1981 & 1981 & 1981 & 1985 & 1993 & 1999 & \\\\ \\hline Time (min:sec) & 3:48.53 & 3:48.40 & 3:47.33 & 3:46.32 & 3:44.39 & 3:43.13 & \\end{calctabular}  Notice that when there an uneven number of entries, the blank entries are placed at the end of the rows, starting from the last row.  "
},
{
  "id": "hardCodingReference04",
  "level": "1",
  "url": "hardCodingReference04.html",
  "type": "Section",
  "number": "36.7",
  "title": "May I reference an example, figure, or table, by hard coding the reference (e.g., <code class=\"code-inline tex2jax_ignore\">Example 5<\/code> instead of <code class=\"code-inline tex2jax_ignore\">Example~\\ref{blahblah}<\/code>)?",
  "body": " May I reference an example, figure, or table, by hard coding the reference (e.g., Example 5 instead of Example~\\ref{blahblah} )?   Follow this link   "
},
{
  "id": "CrossReferencePageNumber01",
  "level": "1",
  "url": "CrossReferencePageNumber01.html",
  "type": "Section",
  "number": "36.8",
  "title": "How do I cross reference an object using a page number?",
  "body": " How do I cross reference an object using a page number?  If the object already has a referencing label (e.g., a table, figure, example usually does) called table2 , say, use page~\\pageref{table2} . Note the p in page is lower case.  If you need to put a label on an object, say a definition, that does not usually have one, put \\label{page:linear} on that page, and, then put page~\\pageref{page:linear} on the page where you want the cross reference to occur.  "
},
{
  "id": "asFormat01",
  "level": "1",
  "url": "asFormat01.html",
  "type": "Section",
  "number": "37.1",
  "title": "What argument should I use in <code class=\"code-inline tex2jax_ignore\">\\asformat{}<\/code>?",
  "body": " What argument should I use in \\asformat{} ?  The argument depends on the book you are contributing to.      Book    Argument     Algebra  ALGEBRA    Precalc  PRECALC    Applied  BUS    Single  CALC    Multi  MULTI    Combined  COMBO     For examples of its use, see I've installed and tested the algebra macros. Is there anything else I should do? . This list is not complete - there are others, for things like solutions' manuals, teacher's manuals, etc.  "
},
{
  "id": "table-18",
  "level": "2",
  "url": "asFormat01.html#table-18",
  "type": "Table",
  "number": "37.1.1",
  "title": "",
  "body": "    Book    Argument     Algebra  ALGEBRA    Precalc  PRECALC    Applied  BUS    Single  CALC    Multi  MULTI    Combined  COMBO    "
},
{
  "id": "StayfigOrFakefig03",
  "level": "1",
  "url": "StayfigOrFakefig03.html",
  "type": "Section",
  "number": "37.2",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">stayfig<\/code> and <code class=\"code-inline tex2jax_ignore\">fakefig<\/code>?",
  "body": " What is the difference between stayfig and fakefig ?   Follow this link   "
},
{
  "id": "texCommandsAbbreviation02",
  "level": "1",
  "url": "texCommandsAbbreviation02.html",
  "type": "Section",
  "number": "37.3",
  "title": "Which TeX commands can I abbreviate?",
  "body": " Which TeX commands can I abbreviate?   Follow this link   "
},
{
  "id": "formatExercisesFiles03",
  "level": "1",
  "url": "formatExercisesFiles03.html",
  "type": "Section",
  "number": "38.1",
  "title": "What is the correct format and naming convention for exercise files?",
  "body": " What is the correct format and naming convention for exercise files?   Follow this link   "
},
{
  "id": "collectionOfExercises02",
  "level": "1",
  "url": "collectionOfExercises02.html",
  "type": "Section",
  "number": "38.2",
  "title": "How do I put together a collection of exercises?",
  "body": " How do I put together a collection of exercises?   Follow this link   "
},
{
  "id": "qset03",
  "level": "1",
  "url": "qset03.html",
  "type": "Section",
  "number": "38.3",
  "title": "In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?",
  "body": " In a collection of exercises, how do I give a subset of the exercises the same set of instructions, called a QSET?   Follow this link   "
},
{
  "id": "creatingChapter02",
  "level": "1",
  "url": "creatingChapter02.html",
  "type": "Section",
  "number": "38.4",
  "title": "How do I create a Chapter?",
  "body": " How do I create a Chapter?   Follow this link   "
},
{
  "id": "exampleInChapter01",
  "level": "1",
  "url": "exampleInChapter01.html",
  "type": "Section",
  "number": "38.5",
  "title": "How do I put an Example in a Chapter?",
  "body": " How do I put an Example in a Chapter?  \\begin{example}\\label{ex:sec5-5:example3:dsl:13FEB2005} Content of the example. \\end{example} \\begin{solution} Put solution here. \\end{solution}  where ex:sec5-5:example3:dsl:13FEB2005 can be whatever label you please, but it must start with ex: and it must be unique. Using the date along with its location for the label is recommended because this is likely to be unique.   If you want to reference this Example, you do so by something like  Example~\\ref{ex:sec5-5:example3:dsl:13FEB2005} shows how to create an example in the book.  "
},
{
  "id": "quickPointersOnTeX01",
  "level": "1",
  "url": "quickPointersOnTeX01.html",
  "type": "Section",
  "number": "38.6",
  "title": "What are some quick pointers on TeX?",
  "body": " What are some quick pointers on TeX?    Producing a typeset document using TeX is a three-stage process. You first create the original TeX file, the input file. Then you compile it (or TeX it) to produce a DVI file. Finally you look at the DVI file, either previewing it on screen or as a printed document. What you see on the screen should be the same as the printed version. Thus, you do not see the document in its final form while you are creating the original file.    The original TeX document is a plaintext file, with the extension \"tex\". A text editor (like WinEdt or Emacs) is used to create and save TeX files rather than a WYSIWIG word-processor program (like MS Word).    In TeX you type both the text and the commands that do the formatting in plaintext. At this stage you cannot see the effect of these formatting commands, and so, to an untrained eye, the plaintext may appear quite confusing.    Any formatting of the text that you do by hand in your text editor is ignored by TeX. For example, multiple spaces, tabs, and line breaks are all converted to a single space before typesetting. However, a blank line generates a new paragraph, whereas spaces at the beginning of a line are ignored. Never try to format a TeX document by using hard spaces.    Math mode is used to enter formulas. If the formula is to be on the same line as the text (called inline) then $E=mc^{2}$ is a famous equation. If the same formula is to be on its own line (called display math) then this would be formatted as $$E=mc^{2}$$ . (However, please see this .) The spacing of these is controlled completely by TeX. Adding spaces to either inline or display math, for example, $E = m c^{2}$ , has no impact.    There are some characters that TeX uses in special ways. For example, $ , which is used to enter inline math, and \\ , which is used as the start of a command. Another character that is useful is % , which is used at the start of a comment, and then the remainder of the line is ignored in the typesetting process.    When in math mode, math functions such as sin, log, etc., are usually entered by \\sin , \\log , etc.    There are four different types of dashes: - produces a hyphen (as in $y$-intercept ), $-$ produces a minus sign (as in $x-y$ ), -- produces an en-dash (as in 1990--2000), and --- produces an em-dash (the dash used for punctuation). None of these have spaces on either side.    Single quotation marks are produced by using the prime key (') and the backprime key (`). Double quotation marks are produced by using these characters twice ('' and ``). Never use the double quotation key to enter double quotations.    The command \\ldots generates ellipses (three dots on a line), whereas \\cdots generates three dots in the center of the line, aligned with a + or - sign. Thus, $a, \\ldots, c$ and $a + \\cdots + c$ would be the usual way of entering these formulas.    For some simple math formulas, see What do a few simple math formulas look like in TeX? .    "
},
{
  "id": "TeXmathFormulas01",
  "level": "1",
  "url": "TeXmathFormulas01.html",
  "type": "Section",
  "number": "38.7",
  "title": "What do a few simple math formulas look like in TeX?",
  "body": " What do a few simple math formulas look like in TeX?  Math formulas that are inline are surrounded by $ signs; math formulas that are centered on their own lines (display math) are surrounded by $$ signs.      To produce this    Enter this        $a+b$       $x^{2}\\geq 0$        $x_1 > \\pi$        $x \\ne 0$        $\\sqrt{x}+ \\sqrt[3]{x}$        $a\\times b + a\\cdot b \\to \\infty$       $\\frac{\\sin x}{x} \\pm 1$        $$ \\frac{\\sin x}{x} \\pm 1 $$        $x_1,\\ldots,x_n$                   $$ x_1+\\cdots+x_n=\\sum_{i=1}^{n}x_i $$      Search online for a more extensive list of TeX examples.  "
},
{
  "id": "table-19",
  "level": "2",
  "url": "TeXmathFormulas01.html#table-19",
  "type": "Table",
  "number": "38.7.1",
  "title": "",
  "body": "    To produce this    Enter this        $a+b$       $x^{2}\\geq 0$        $x_1 > \\pi$        $x \\ne 0$        $\\sqrt{x}+ \\sqrt[3]{x}$        $a\\times b + a\\cdot b \\to \\infty$       $\\frac{\\sin x}{x} \\pm 1$        $$ \\frac{\\sin x}{x} \\pm 1 $$        $x_1,\\ldots,x_n$                   $$ x_1+\\cdots+x_n=\\sum_{i=1}^{n}x_i $$     "
},
{
  "id": "dontEnoughTex03",
  "level": "1",
  "url": "dontEnoughTex03.html",
  "type": "Section",
  "number": "38.8",
  "title": "I know what I want to say, but I don’t know enough TeX to express it. What do I do?",
  "body": " I know what I want to say, but I don't know enough TeX to express it. What do I do?   Follow this link   "
},
{
  "id": "doesntTex02",
  "level": "1",
  "url": "doesntTex02.html",
  "type": "Section",
  "number": "38.9",
  "title": "The TeX file I created does not TeX. What do I do?",
  "body": " The TeX file I created does not TeX. What do I do?   Follow this link   "
},
{
  "id": "hardCodingReference02",
  "level": "1",
  "url": "hardCodingReference02.html",
  "type": "Section",
  "number": "38.10",
  "title": "May I reference an example, figure, or table, by hard coding the reference (e.g., <code class=\"code-inline tex2jax_ignore\">Example 5<\/code> instead of <code class=\"code-inline tex2jax_ignore\">Example~\\ref{blahblah}<\/code>)?",
  "body": " May I reference an example, figure, or table, by hard coding the reference (e.g., Example 5 instead of Example~\\ref{blahblah} )?   Follow this link   "
},
{
  "id": "algebraMacros",
  "level": "1",
  "url": "algebraMacros.html",
  "type": "Section",
  "number": "38.11",
  "title": "I’ve installed and tested the algebra macros. Is there anything else I should do?",
  "body": " I've installed and tested the algebra macros. Is there anything else I should do?  Yes. In your master TeX files, replace all instances of \\asformat{MULTI} with \\asformat{ALGEBRA} .  "
},
{
  "id": "asFormat02",
  "level": "1",
  "url": "asFormat02.html",
  "type": "Section",
  "number": "38.12",
  "title": "What argument should I use in \\asformat{}?",
  "body": " What argument should I use in \\asformat{} ?   Follow this link   "
},
{
  "id": "quickPointersOnTeX02",
  "level": "1",
  "url": "quickPointersOnTeX02.html",
  "type": "Section",
  "number": "39.1",
  "title": "What are some quick pointers on TeX?",
  "body": " What are some quick pointers on TeX?   Follow this link   "
},
{
  "id": "TeXmathFormulas02",
  "level": "1",
  "url": "TeXmathFormulas02.html",
  "type": "Section",
  "number": "39.2",
  "title": "What do a few simple math formulas look like in TeX?",
  "body": " What do a few simple math formulas look like in TeX?   Follow this link   "
},
{
  "id": "sequenceOfEquations02",
  "level": "1",
  "url": "sequenceOfEquations02.html",
  "type": "Section",
  "number": "39.3",
  "title": "I want to create a sequence of equations, one below the other, with the equal signs lined up.  How do I do that?",
  "body": " I want to create a sequence of equations, one below the other, with the equal signs lined up. How do I do that?   Follow this link   "
},
{
  "id": "piecewiseFunction02",
  "level": "1",
  "url": "piecewiseFunction02.html",
  "type": "Section",
  "number": "39.4",
  "title": "What command do I use in TeX to construct a piecewise defined function?",
  "body": " What command do I use in TeX to construct a piecewise defined function?   Follow this link   "
},
{
  "id": "displayMathStyle02",
  "level": "1",
  "url": "displayMathStyle02.html",
  "type": "Section",
  "number": "39.5",
  "title": "How can I use the display math style without putting the expression on a new line?",
  "body": " How can I use the display math style without putting the expression on a new line?   Follow this link   "
},
{
  "id": "displaystyle03",
  "level": "1",
  "url": "displaystyle03.html",
  "type": "Section",
  "number": "39.6",
  "title": "Can I use <code class=\"code-inline tex2jax_ignore\">\\displaystyle<\/code> in display math style or in <code class=\"code-inline tex2jax_ignore\">eqnarray*<\/code>?",
  "body": " Can I use \\displaystyle in display math style or in eqnarray* ?   Follow this link   "
},
{
  "id": "shouldKnowDisplayStyle03",
  "level": "1",
  "url": "shouldKnowDisplayStyle03.html",
  "type": "Section",
  "number": "39.7",
  "title": "Is there anything I should know if I use display math style (that is, when an expression is on its own line)?",
  "body": " Is there anything I should know if I use display math style (that is, when an expression is on its own line)?   Follow this link   "
},
{
  "id": "integrals03",
  "level": "1",
  "url": "integrals03.html",
  "type": "Section",
  "number": "39.8",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\int f(x) dx$<\/code>, to construct the integral of f(x), the f(x) and dx are too close. What should I do?",
  "body": " If I use $\\int f(x) dx$ , to construct the integral of f(x), the f(x) and dx are too close. What should I do?   Follow this link   "
},
{
  "id": "vectorsArrow02",
  "level": "1",
  "url": "vectorsArrow02.html",
  "type": "Section",
  "number": "39.9",
  "title": "Do I use <code class=\"code-inline tex2jax_ignore\">$\\vec F$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\overrightarrow{F}$<\/code> to put an arrow on top of the vector F?",
  "body": " Do I use $\\vec F$ or $\\overrightarrow{F}$ to put an arrow on top of the vector F?   Follow this link   "
},
{
  "id": "vectorSubscript03",
  "level": "1",
  "url": "vectorSubscript03.html",
  "type": "Section",
  "number": "39.10",
  "title": "If I use <code class=\"code-inline tex2jax_ignore\">$\\vec F_{M}$<\/code> or <code class=\"code-inline tex2jax_ignore\">$\\overrightarrow{F}_M$<\/code> a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?",
  "body": " If I use $\\vec F_{M}$ or $\\overrightarrow{F}_M$ a huge gap is left between the bottom of the F and the M, which looks wrong. What should I do?   Follow this link   "
},
{
  "id": "commonTexMistakes03",
  "level": "1",
  "url": "commonTexMistakes03.html",
  "type": "Section",
  "number": "39.11",
  "title": "Is there a list of common TeX mistakes?",
  "body": " Is there a list of common TeX mistakes?   Follow this link   "
},
{
  "id": "verticalBar02",
  "level": "1",
  "url": "verticalBar02.html",
  "type": "Section",
  "number": "39.12",
  "title": "When I TeX <code class=\"code-inline tex2jax_ignore\">\\dsty \\left.\\arctan(x)\\right|_0^b<\/code> the vertical bar isn’t long enough.  How can I get it taller?",
  "body": " When I TeX \\dsty \\left.\\arctan(x)\\right|_0^b the vertical bar isn't long enough. How can I get it taller?   Follow this link   "
},
{
  "id": "textIntoEquation03",
  "level": "1",
  "url": "textIntoEquation03.html",
  "type": "Section",
  "number": "39.13",
  "title": "How do I put text into an equation?",
  "body": " How do I put text into an equation?   Follow this link   "
},
{
  "id": "quickPointersOnTeX03",
  "level": "1",
  "url": "quickPointersOnTeX03.html",
  "type": "Section",
  "number": "40.1",
  "title": "What are some quick pointers on TeX?",
  "body": " What are some quick pointers on TeX?   Follow this link   "
},
{
  "id": "StayfigOrFakefig02",
  "level": "1",
  "url": "StayfigOrFakefig02.html",
  "type": "Section",
  "number": "40.2",
  "title": "What is the difference between <code class=\"code-inline tex2jax_ignore\">stayfig<\/code> and <code class=\"code-inline tex2jax_ignore\">fakefig<\/code>?",
  "body": " What is the difference between stayfig and fakefig ?   Follow this link   "
},
{
  "id": "commonTexMistakes04",
  "level": "1",
  "url": "commonTexMistakes04.html",
  "type": "Section",
  "number": "40.3",
  "title": "Is there a list of common TeX mistakes?",
  "body": " Is there a list of common TeX mistakes?   Follow this link   "
},
{
  "id": "mathematicalSymbolsInHeadings02",
  "level": "1",
  "url": "mathematicalSymbolsInHeadings02.html",
  "type": "Section",
  "number": "40.4",
  "title": "I am trying to create tables where the headings are mathematical symbols, e.g. <code class=\"code-inline tex2jax_ignore\">$\\times 2$ & $+4$ & $\\div 2$<\/code>.  The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol.  Any suggestions?",
  "body": " I am trying to create tables where the headings are mathematical symbols, e.g. $\\times 2$ & $+4$ & $\\div 2$ . The times and the plus are replaced by the correct symbols, but the div just prints the word \"div\" instead of the division symbol. Any suggestions?   Follow this link   "
},
{
  "id": "somethingInBox02",
  "level": "1",
  "url": "somethingInBox02.html",
  "type": "Section",
  "number": "40.5",
  "title": "What command do I use in TeX to place something in a box, similar to page 2 in Calculus, 3rd Edition?",
  "body": " What command do I use in TeX to place something in a box, similar to page 2 in Calculus, 3rd Edition?   Follow this link   "
},
{
  "id": "printSpecialCharacters02",
  "level": "1",
  "url": "printSpecialCharacters02.html",
  "type": "Section",
  "number": "40.6",
  "title": "How do I print the TeX special characters: <code class=\"code-inline tex2jax_ignore\">$, &, %, #, _,{, and }<\/code>?",
  "body": " How do I print the TeX special characters: $, &, %, #, _,{, and } ?   Follow this link   "
},
{
  "id": "texCommandsAbbreviation03",
  "level": "1",
  "url": "texCommandsAbbreviation03.html",
  "type": "Section",
  "number": "40.7",
  "title": "Which TeX commands can I abbreviate?",
  "body": " Which TeX commands can I abbreviate?   Follow this link   "
},
{
  "id": "insertEntryForTheIndex",
  "level": "1",
  "url": "insertEntryForTheIndex.html",
  "type": "Section",
  "number": "40.8",
  "title": "How do I insert an entry for the index?",
  "body": " How do I insert an entry for the index?  If you are adding to an existing index, check to see which entry to use.  To the right of the word\/position to be indexed, place the command \\index{entry} where entry (in lower case) is the word in the index you want to refer to the position in the text. If the entry is to be indented under a sub-heading of a heading in the index, use \\index{heading!entry} .  "
},
{
  "id": "footnote03",
  "level": "1",
  "url": "footnote03.html",
  "type": "Section",
  "number": "40.9",
  "title": "How do I insert a footnote?",
  "body": " How do I insert a footnote?   Follow this link   "
},
{
  "id": "boldface03",
  "level": "1",
  "url": "boldface03.html",
  "type": "Section",
  "number": "40.10",
  "title": "How can I change the typeface to boldface?",
  "body": " How can I change the typeface to boldface?   Follow this link   "
},
{
  "id": "typeSize03",
  "level": "1",
  "url": "typeSize03.html",
  "type": "Section",
  "number": "40.11",
  "title": "How can I change the type size?",
  "body": " How can I change the type size?   Follow this link   "
},
{
  "id": "spaceBetweenTwoLines02",
  "level": "1",
  "url": "spaceBetweenTwoLines02.html",
  "type": "Section",
  "number": "40.12",
  "title": "How can I increase space between two lines?",
  "body": " How can I increase space between two lines?   Follow this link   "
},
{
  "id": "spaceBeforeAfterDashes03",
  "level": "1",
  "url": "spaceBeforeAfterDashes03.html",
  "type": "Section",
  "number": "40.13",
  "title": "Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don’t want that. What do I do?",
  "body": " Sometimes there is a space before or after my dashes (-), en-dashes (--), and em-dashes (---), and I don't want that. What do I do?   Follow this link   "
},
{
  "id": "commandsToGetDivGradCurl02",
  "level": "1",
  "url": "commandsToGetDivGradCurl02.html",
  "type": "Section",
  "number": "40.14",
  "title": "What commands do I use to get <em class=\"emphasis\">div<\/em>, <em class=\"emphasis\">grad<\/em>, and <em class=\"emphasis\">curl<\/em>?",
  "body": " What commands do I use to get div , grad , and curl ?   Follow this link   "
},
{
  "id": "periodBetween03",
  "level": "1",
  "url": "periodBetween03.html",
  "type": "Section",
  "number": "40.15",
  "title": "When I TeX \"The difference is <code class=\"code-inline tex2jax_ignore\">\\$0.01.<\/code>\" there is a spacing problem involving the period between the two zeros. What do I do?",
  "body": " When I TeX \"The difference is \\$0.01. \" there is a spacing problem involving the period between the two zeros. What do I do?   Follow this link   "
},
{
  "id": "commentChunkTex02",
  "level": "1",
  "url": "commentChunkTex02.html",
  "type": "Section",
  "number": "40.16",
  "title": "I want to comment out a large chunk of TeX, without deleting it.  Do I have to put % at the beginning of every line?",
  "body": " I want to comment out a large chunk of TeX, without deleting it. Do I have to put % at the beginning of every line?   Follow this link   "
},
{
  "id": "missingDollarSign03",
  "level": "1",
  "url": "missingDollarSign03.html",
  "type": "Section",
  "number": "40.17",
  "title": "Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?",
  "body": " Why do I get an error message concerning missing $ when I try to TeX \"\\footnote{http:\/\/dr.pierce1.net\/PDF\/half_life.pdf, accessed on May 10, 2003.}\"?   Follow this link   "
},
{
  "id": "ordinalNumbersExpressionsTeX04",
  "level": "1",
  "url": "ordinalNumbersExpressionsTeX04.html",
  "type": "Section",
  "number": "40.18",
  "title": "How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?",
  "body": " How do I TeX expressions like \"1^{st}\" and \"n^{th}\"?   Follow this link   "
},
{
  "id": "poundSymbol02",
  "level": "1",
  "url": "poundSymbol02.html",
  "type": "Section",
  "number": "40.19",
  "title": "How do I enter the UK counterpart of $, namely the UK pound symbol, £?",
  "body": " How do I enter the UK counterpart of $, namely the UK pound symbol, £?   Follow this link   "
},
{
  "id": "subscripts06",
  "level": "1",
  "url": "subscripts06.html",
  "type": "Section",
  "number": "40.20",
  "title": "When I use  word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large.  What should I be using?",
  "body": " When I use word subscripts (e.g. $r_{in}$ or $r_{\\hbox{in}}$) the word \"in\" is either in italics or too large. What should I be using?   Follow this link   "
},
{
  "id": "generateTildeBlah03",
  "level": "1",
  "url": "generateTildeBlah03.html",
  "type": "Section",
  "number": "40.21",
  "title": "How do I get TeX to generate <code class=\"code-inline tex2jax_ignore\">~blah<\/code>?",
  "body": " How do I get TeX to generate ~blah ?   Follow this link   "
},
{
  "id": "textIntoEquation04",
  "level": "1",
  "url": "textIntoEquation04.html",
  "type": "Section",
  "number": "40.22",
  "title": "How do I put text into an equation?",
  "body": " How do I put text into an equation?   Follow this link   "
},
{
  "id": "angleInRadians02",
  "level": "1",
  "url": "angleInRadians02.html",
  "type": "Section",
  "number": "41.1",
  "title": "Do I need to specify that the units of an angle are in radians?",
  "body": " Do I need to specify that the units of an angle are in radians?   Follow this link   "
},
{
  "id": "abbreviationStandarUnits03",
  "level": "1",
  "url": "abbreviationStandarUnits03.html",
  "type": "Section",
  "number": "41.2",
  "title": "What are the abbreviations and conventions that we use for standard units like grams and miles per hour?",
  "body": " What are the abbreviations and conventions that we use for standard units like grams and miles per hour?   Follow this link   "
},
{
  "id": "commonConstants02",
  "level": "1",
  "url": "commonConstants02.html",
  "type": "Section",
  "number": "41.3",
  "title": "What are the values that we use for common constants like <em class=\"emphasis\">g<\/em>, the half-life of carbon-14, and the radius of the earth?",
  "body": " What are the values that we use for common constants like g , the half-life of carbon-14, and the radius of the earth?   Follow this link   "
},
{
  "id": "units02",
  "level": "1",
  "url": "units02.html",
  "type": "Section",
  "number": "41.4",
  "title": "I’m confused about units. Are the units of <em class=\"emphasis\">g<\/em> acceleration or ft\/sec^2?",
  "body": " I'm confused about units. Are the units of g acceleration or ft\/sec^2?   Follow this link   "
},
{
  "id": "unitsOnFigures03",
  "level": "1",
  "url": "unitsOnFigures03.html",
  "type": "Section",
  "number": "41.5",
  "title": "Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?",
  "body": " Do I need to put the units (of the variables) in the text of an exercise and also in the figure of the exercise?   Follow this link   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
