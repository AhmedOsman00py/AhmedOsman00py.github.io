# Apprenticeship - Automatic Detection of Legal Query Series

The project focuses on automating the classification of legal query series through a combination of data science techniques, developed during my Master's apprenticeship in Data Science at the University of Paris Saclay and the Conseil d'État *(State Council of France)*, an essential process for optimizing data processing within this institution.

![System overview](/projects/Conseil_d_etat/img/Processus.png)

### Optical Character Recognition [(1 - OCR)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/1%20-%20OCR)

This folder contains the scripts and resources used to convert scanned legal documents into machine-readable text. OCR technology is the first step in the workflow, transforming physical documents into a digital format that can be analyzed. 

![OCR](/projects/Conseil_d_etat/img/OCRisation.png)

The accuracy of the OCR process is crucial as it directly impacts the quality of the data fed into the subsequent processing stages.

### Data Handling [(2 - Données)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/2%20-%20Données)

![Data_schema](/projects/Conseil_d_etat/img/data_schema_.png)

In this section, the raw text data derived from the OCR process undergoes cleaning and preparation. This includes removing any noise, such as irrelevant characters or erroneous text artifacts, and standardizing the format of the data. The goal is to ensure that the data is in a consistent and structured format, ready for the exploratory analysis and machine learning stages.

### Data Exploration [(3 - Exploration des données)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/3%20-%20Exploration%20des%20données)

This folder is dedicated to exploratory data analysis (EDA), where the data is examined to understand its underlying structure and patterns. EDA involves generating visualizations and statistical summaries that help to identify trends, outliers, and potential relationships within the data. 

![Data_exploration](/projects/Conseil_d_etat/img/rep_classes2.png)

These insights are crucial for guiding the choice of modeling techniques and for understanding the characteristics of the legal queries.

### Text Processing [(4 - Text Processing)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/4%20-%20Text%20Processing)

Here, various text processing techniques are applied to the cleaned data to prepare it for machine learning. Techniques such as stemming (reducing words to their root form), and lemmatization (converting words to their base or dictionary form) are used.

![text processing pipeline](/projects/Conseil_d_etat/img/customized_pipeline.png)

Additionally, this stage might involve vectorization methods like TF-IDF (Term Frequency-Inverse Document Frequency) to transform the text into numerical features that machine learning models can process.

### Dimensionality Reduction [(5 - Réduction de dimension)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/5%20-%20Réduction%20de%20dimension)

The processed text data, now in a numerical format, often contains a large number of features.
Dimensionality reduction techniques such as PCA (Principal Component Analysis) or t-SNE (t-distributed Stochastic Neighbor Embedding) are used to reduce the number of features while retaining the most informative aspects of the data. 

![SVD, t-SNE, UMAP](/projects/Conseil_d_etat/img/svdtsneumap.png)   
![MDS, Isomap](/projects/Conseil_d_etat/img/mdsisomap.png)

This helps in both improving the efficiency of machine learning models and making the data more interpretable.

### Data Splitting Strategy [(6 - Stratégie de division des données)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/6%20-%20Stratégie%20de%20division%20des%20données)

The `StratifiedShuffleSplit` has been used here. This data division strategy is a cross-validation technique that aims to preserve the distribution of classes in both the training and test sets. Specifically, it ensures that the proportion of each class remains constant in both sets, which is particularly important when dealing with imbalanced classes.
The algorithm works by randomly shuffling the data, then dividing the dataset into train and test sets while maintaining the class proportions. 

### Machine Learning Algorithms [(7 - Algorithmes)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/7%20-%20Algorithmes)

This section focuses on the implementation of various machine learning models designed to classify legal queries. It covers the entire workflow from selecting appropriate algorithms (such as random forest, support vector machines, or neural networks and more), training the models on the prepared data, and tuning parameters to optimize performance. Each model's effectiveness is tested against the validation set, with the best-performing models selected for final deployment.

### Fine-Tuning [(8 - Fine-Tuning)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/8%20-%20Fine-Tuning)

After initial model training, further optimization is required to achieve the best possible performance. This folder details the fine-tuning process using bayesian optimization.

### Benchmarking [(9 - Benchmark)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/9%20-%20Benchmark)
The models developed are rigorously evaluated using a variety of performance metrics such as accuracy, precision, recall, and F1-score. 

![Benchmarking table](/projects/Conseil_d_etat/img/tsne%20scores.png)

This folder contains the results of these evaluations, comparing different models and configurations to determine which approach best meets the project’s goals.

![Benchmarking table](/projects/Conseil_d_etat/img/tsne%20graph.png)


### Application Development [(10 - App)](https://github.com/AhmedOsman00py/CE-detection-series-de-requetes/tree/main/10%20-%20App)

The final stage of the project involves translating the machine learning models into a practical application. This folder contains the code for developing an application or dashboard that allows end-users, such as legal professionals at the Conseil d'État, to **classify new legal queries in real-time**. 

![Real time detection](/projects/Conseil_d_etat/img/real_time_detection.png)

The application integrates all previous steps, providing a user-friendly interface that leverages the power of the trained models to automate and streamline the classification process.


### Data Confidentiality and Security
Given the sensitive nature of legal data, this project takes data security very seriously. The repository does not include any confidential information, with all sensitive data omitted or anonymized. The focus is on showcasing the methodologies and workflows rather than the specific data itself, ensuring compliance with data protection regulations.

### License
This project is shared under the GNU General Public License v3.0.


![Github repo](https://img.shields.io/badge/Github_repository-black?logo=Github) *(French version)*