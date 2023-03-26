# Software-Engineering-MINI-PROJECT
This project was created as a final assignment for completing a course of sofware engineering in the 5th semseter of BTECH computer science.

**Installation**
This project was built using Nodejs using express and ejs for templeting.Therefore if you have nodejs enviroment already running on your system you just have to isntall the dependencies mentioned in the pakage.json.

**Input**
The software accepts a text file containing nucleotide sequences of several genes. There are two fields for each gene:

One-line gene info. This line should start with a character '>'.
Nucleotide sequences of the gene in one or multiple lines.
The gene sequence should contain characters A/T/U/G/C. Both small and capital letters are acceptable. Starting three characters should be either ATG or GTG. Ending three character should only be any of these three: TAA/TAG/TGA. There should not be these triplets TAA/TAG/TGA in middle of the gene sequence.

**Output**
The software creates a database table with fields such as sl. no., gene info, nucleotide sequence, size, G+C%, protein sequence and remark. For each gene present in the input file, it creates a record in this table and stores sl. no., gene info and nucleotide sequence. If the nucleotide sequence contains any of the above error details for each gene, it updates the corresponding remark field in the data base table for the gene. For each gene, it updates the table with additional details such as gene length, G+C%, protein sequence.

The software also creates an interface to search details for a given gene from the data base and display.

# Error Handling
The software generates appropriate error message if an erroneous file is provided as input.
