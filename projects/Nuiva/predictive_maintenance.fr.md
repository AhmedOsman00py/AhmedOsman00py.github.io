---
layout: default
title: "Maintenance Prédictive"
lang: fr

permalink_fr: /projects/Nuiva/predictive_maintenance.fr.html
permalink_en: /projects/Nuiva/predictive_maintenance.html
---

# Maintenance Prédictive

Conception, développement et déploiement d’un **système prédictif** capable d’anticiper le nombre d’occurrences d’alarmes pour chaque catégorie d’alarme sur les Éléments Réseau *(Routeurs, Antennes Relais, etc.)* sur une période de **14 jours**.  
Ce système permet d’optimiser la **maintenance prédictive** en identifiant **les problèmes potentiels avant qu'ils ne surviennent**, en s'intégrant aux systèmes opérationnels existants pour automatiser la création de tickets et en fournissant des informations exploitables pour améliorer la fiabilité du réseau et réduire les temps d'arrêt.

<a href='images/predictive_maintenance-2.svg'>
    <img src='images/predictive_maintenance-2.svg' style='width: 115%'>
</a>

### **Résultats et Valeur Ajoutée**
- **Maintenance Proactive** :
    - Détection précoce des anomalies permettant des interventions rapides.
    - Réduction des interruptions réseau et amélioration de la fiabilité du service.
- **Optimisation des Ressources** :
    - Allocation efficace des ressources de maintenance en fonction des besoins prédits.
- **Amélioration de la Prise de Décision** :
    - Des insights basés sur les données facilitent la planification stratégique.
- **Intégration aux Processus Métier** :
    - Une intégration fluide avec les systèmes existants améliore l'efficacité opérationnelle.

---

## **Introduction : Amélioration des Systèmes de Gestion des Pannes**

Ce projet vise à améliorer les systèmes de gestion des pannes en s'attaquant à deux aspects critiques de la maintenance réseau :

**Détection des Alarmes Pertinentes** : Classification des alarmes en pertinentes ou non pertinentes pour réduire le bruit et concentrer les ressources sur les problèmes critiques.        
**Prédiction des Occurrences d'Alarmes** : Anticipation du nombre d'alarmes pour chaque catégorie sur 14 jours, permettant des interventions proactives.

En combinant ces **deux approches**, le système **prédit non seulement les alarmes futures, mais identifie également celles nécessitant une intervention immédiate**.  
Cette approche globale améliore la **fiabilité du réseau** en **réduisant les temps d'arrêt**, en **optimisant l'allocation des ressources** et en **facilitant la prise de décision**.

---

## **Collecte et Préparation des Données**

L'apprentissage du modèle repose sur des **données historiques**.  
L’ensemble de données initial contient **environ 3,8 millions d’événements d’alarmes** enregistrés **entre 2019 et 2021**.  
Pour ce projet, nous avons **filtré les données de 2021**, obtenant **850 000 événements d’alarmes** avec **14 caractéristiques principales**.

### **Principales Variables du Jeu de Données**
- `date` : Date et heure de l’occurrence de l’alarme.
- `site_id` : Identifiant du site où se trouve l’**Élément Réseau (NE)**.
- `ne_name` : Nom de l’**Élément Réseau**.
- `zone_circle` : Zone géographique du **NE**.
- `ne_type` : Type d’équipement.
- `vendor` : Fabricant de l’équipement *(Huawei, Ericsson, etc.)*.
- `technology` : Technologie utilisée *(3G, 4G, etc.)*.

### **Variables Cibles**
- `alarm_category` : **Catégorie d'alarme** *(Exemple : Perte de signal, Température élevée, etc.)*.
- `occurrences` : **Nombre d'occurrences de l’alarme**.

---

## **Exploration des Données**

Nous avons observé **de fortes variations** dans les occurrences d’alarmes en fonction des jours.  
Certains jours **ne présentaient aucune alarme**, tandis que d'autres montraient **d’importants pics d’événements**.

<img src='images/calendar_heatmap.png'>
_Les nuances plus foncées indiquent un plus grand nombre d’alarmes._

Un exemple marquant :  
- **19 juillet 2021** : ~20 000 alarmes.
- **18 juillet 2021** : ~6 000 alarmes.  

Cette forte variation suggère des **facteurs sous-jacents** influençant la fréquence des alarmes.

### **Analyse Temporelle**
<img src='images/event_time_distributions.png'>

Nous avons également constaté que :
- **Aucune alarme** n’a été enregistrée après **août 2021**.
- **La majorité des alarmes** surviennent entre **11h et 18h**, suggérant une corrélation avec **les heures d’activité réseau**.

---

## **Traitement des Données**

Nous avons identifié **191 types d’alarmes distincts**, ce qui est difficile à prédire individuellement.  
Nous avons donc **regroupé les alarmes en catégories**.

<img src='images/alarm_distribution.png'>

### **Explication des Catégories**
- **Défaillances de Communication** : Connexions perdues, échecs de communication à distance.
- **Perte de Synchronisation et de Signal** : Problèmes de signaux de synchronisation, seuils d'erreurs dépassés.
- **Erreurs Matérielles** : Défaillances matérielles, équipements en panne.
- **Problèmes d’Alimentation** : Pannes électriques, tensions anormales.
- **Alarmes de Température** : Températures excessives, pannes de refroidissement.
- **Problèmes de Licence** : Licences manquantes ou expirées.
- **Problèmes Logiciels et de Configuration** : Fichiers corrompus, erreurs de configuration.
- **Maintenance et Sauvegarde** : Défaillances de sauvegarde, interventions de maintenance.
- **Problèmes de Fréquence Radio** : Signaux RF faibles, problèmes de transmission.
- **Problèmes Optiques et SFP** : Pertes de signal optique, modules SFP défectueux.

---

## **Ingénierie des Caractéristiques**
Pour chaque **variable cible**, nous avons créé :
- **Caractéristiques en retard (lags)**.
- **Statistiques sur fenêtres glissantes (rolling windows)**.
- **Extraction et encodage des caractéristiques temporelles**.
- **Transformations cycliques des dates**.
- **Transformations de Fourier** pour capturer la saisonnalité.

Les **valeurs cibles ont été mises à l’échelle** via **log1p transformation**, et les variables catégorielles ont été **encodées**.

---

## **Modélisation**
### **Modèle Prédictif**
<img src='images/2cols.png'>

##### **Exemple de Prédictions**

Nous avons évalué le modèle en prédisant les alarmes pour **les 14 jours suivants**, puis en comparant les prédictions aux valeurs réelles.

<a href="images/NE1.png">
    <img src='images/NE1.png'>
</a>

Dans cet exemple :
- Le modèle a **identifié avec précision** les jours où des alarmes se produiraient.
- Certaines catégories, comme **Défaillances de Communication**, ont des **prédictions parfaites**.
- D'autres, comme **Problèmes d'Alimentation**, ont **une légère sous-estimation**.

---

## **Filtrage des Alarmes Pertinentes**
Nous avons classifié les alarmes prédites en **pertinentes** ou **non pertinentes**.  
Les alarmes **sont jugées non pertinentes** si elles :
- **Se résolvent automatiquement**.
- **Sont déclenchées lors d’une maintenance planifiée**.
- **Proviennent d’équipements déjà identifiés comme défectueux**.

<div align='center'> <img src='images/AI_for_filtering.png' style='width: 95%'> </div>

Un **`CatBoostClassifier`** a été entraîné pour prédire **si une alarme est pertinente**.

---

## **Impact et Bénéfices**
<div align='center'>
  <img src='images/system_benefits.png' style="width: 85%">
</div>

> **Confidentialité et Sécurité des Données**  
> Toutes les **données sensibles ont été anonymisées**, garantissant la conformité aux **réglementations sur la protection des données**.
