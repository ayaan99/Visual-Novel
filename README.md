# FUDGE_Story
A FUDGE module for the easy development of interactive stories, visual novels and simple adventure games


# Abgabe
- [Github-Repository](https://github.com/ayaan99/Visual-Novel)
- [Pages-Link](https://ayaan99.github.io/Visual-Novel/Revived/Revived.html)
- [Quellcode](https://github.com/ayaan99/Visual-Novel/tree/main/Revived/Source)
- [Konzept-Dokument](https://github.com/ayaan99/Visual-Novel/blob/main/Konzept/VisualNovel_Gesamtkonzept_Ayaan_Wirth.pdf)
- [Projekt-Archiv]()


## Bewertungskriterien
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU  

| Nr | Bezeichnung           | Inhalt | Umsetzung|
|---:|-----------------------|------|----------|
|    | Titel                 | Revived  |
|    | Name                  | Ayaan Wirth  |
|    | Matrikelnummer        | 265042  |
|  1 | Konzeption     | Die Story der Visual Novel wird in einer kurzen Inhaltsangabe beschrieben und der Konzeption beigefügt. In dieser sind jegliche Diagramme, Scribbles sowie entweder ein Storyboard, ein Drehbuch oder Ähnliches enthalten.                                                                                                                            | [Konzept-Dokument](https://github.com/ayaan99/Visual-Novel/tree/main/Konzept)|
|  2 | Charaktersteckbriefe     | Kommen Archetypen zum Einsatz? Welche anderweitigen Charaktermodelle existieren (Steckbriefe)?                                                                                                                                                                                | siehe Charakter-Steckbriefe im [Konzept-Dokument](https://github.com/ayaan99/Visual-Novel/tree/main/Konzept) |
|  3 | Auswahlmöglichkeiten | Dialogoptionen stellen _branching plots_ zur Verfügung und lassen den Spieler zu einem gewissen Grad selbstbestimmt handeln. Sind derartige Entscheidungen vorhanden und unterscheidet sich der Dialog je nach getätigter Auswahl?                                                                                                                                                     | Es sind mehrere Auswahlmöglichkeiten vorhanden, die unterschiedlich stark Einfluss auf die Handlung haben und andere Dialoge bereitstellen. |
|  4 | Branching paths      | Verzweigte Pfade bieten dem Spieler die Möglichkeit, seinen individuell präferierten Pfad zu verfolgen. Sind alle Variablen sinnvoll benannt und die Szenenhierarchie strukturiert und übersichtlich aufgebaut? Welche Szenen sind wie miteinander gekoppelt?                                                                                                                                                          | Es sind fünf unterschiedliche Handlungspfade vorhanden. |
|  5 | Transitions            | Transitions stellen Überblendungen z.B. zwischen Szenen dar und können leicht modifiziert werden. Kommen unterschiedliche Transitions zum Einsatz?                                                                                                                                                      | Unterschiedliche Transitions sind zwischen und innerhalb von Szenen vorhanden. |
|  6 |         Audio         | Sounds sind eingebunden und unterstützen oder ermöglichen die Wahrnehmung der Aktionen. Welche Ereignisse werden durch Geräusche akustisch unterstützt; durch welche Geräuschkulisse oder Musik die Atmosphäre? Gibt es ein auditiv geplantes Muster, bei dem zu ganz speziellen Events Sound / Musik abgespielt wird?                                         |In jeder Szene wird Musik wiedergegeben, die die Handlung und Atmosphäre auditiv unterstützt. Einzelne Handlungen in Cut-Scenes werden ebenfalls durch Sound vermittelt (z. B.: das Umblättern in einem Buch)|
|  7 |         GUI            | Ein grafisches Interface gibt dem Nutzer die Möglichkeit, Einstellungen beim Programmstart oder während des Programmlaufs vorzunehmen. Was kann er dort tun? Wird z. B. auf ein Out-Of-Game-Menu oder ein sogenanntes Ingame-Menu zurückgegriffen? Alternativ kann eine Art von Skala, die sich unter bestimmten Bedingungen füllt oder leert (bspw. eine Lovebar / ein Love'O'Meter) eingebaut werden.[^1]      | Es gibt ein Ingame-Menu auf das per Tastatur jederzeit zugegriffen werden kann|
|  8 | Input-Feld(er)          | Input-Felder können verwendet werden, damit man dem Spieler die Option bietet, mithilfe einer Eingabe interne Zustände zu verändern. Wird dem Spieler die Möglichkeit gegeben z. B. seinen Namen einzugeben und wird dieser im Verlauf der Story verwendet? Sind weitere Input-Felder eingesetzt worden? Zu welchem Zweck?              | Im Dialog zwischen den Hauptfiguren wird ein Input-Feld verwendet, um zu Erläutern in welchem Studium / in welchem Kurs man ist. |
| 9 | Animation      | Animationen können selbst definiert und auf Objekte angewendet werden. Wurden verschiedene Animationen bestimmt und kommen zur Verwendung?           | Es wurden unterschiedliche Animationen bestimmt, um Charaktere in die Szene hinein und wieder heraus zu führen.|
| 10 | Styling          | Werden <b>alle</b> relevanten Elemente mithilfe von CSS gestylt und wurden zweckmäßig benannt?                | Speech-Elemente, GUI, Inventar und Novel-Pages wurden mithilfe von CSS visuell gestylt. |
| 11 | Creative Corner          | Umsetzung eines eigens konzipierten Alleinstellungsmerkmals (nach Absprache oder während der Konzeptvorstellungen)               | Während des Spielens sammelt der Spieler (ohne es zu wissen) jeweils zu Handlung passende Bilder und bekommt diese erst am Ende in Form einer Bilder-Wand zu sehen. Dabei variieren diese Bilder je nach gewähltem Handlungspfad. |
| 12 | Enden            | Wurden verschiedene Spielenden eingebaut (mind. zwei)?                       | Es wurden zwei verschiedene Enden eingebaut. Eins indem die Protagonistin ihr Schicksal akzeptiert und eins indem sie die Situation ablehnt. |
|  A | Inventory- und Item-System     | Das Inventarsystem übernimmt das Management von hinzugefügten, konsumierbaren sowie nicht-konsumierbaren Items. Wird dieses System genutzt? Welche Items gibt es und was für Eigenschaften werden diesen zugeschrieben? Wozu existieren sie?| In das Inventar werden während dem Spielen Bilder hinzugefügt, die dem Spieler erst am Ende ersichtlich werden. Sie dienen dem Spieler dazu, die Geschichte abschließend durch eine Bilder-Wand reflektieren zu können. |
|  B | Punkteverteilungssystem     | Ein Punktesystem kann bei den unterschiedlichsten Situationen zum Einsatz kommen. So können Punkte vergeben, abgezogen, berechnet und das Ergebnis ausgewertet werden. Gibt es hierfür ein geregeltes Schema, das die Punkteverteilung für das Verhalten des Spielers festlegt oder ähnliche Regeln?             | - |
|  C | Novel-Pages             | _Novel-Pages_ können eingesetzt werden, um weitere Textelemente mit ggf. besonderen Interaktionsmöglichkeiten auszustatten und einzublenden. Wie wurden Novel Pages umgesetzt und welche Interaktionsmöglichkeiten gibt es?                       | Die Novel-Pages wurden in vorm von einem Tagebuch, in das die Protagonistin ihre Gedanken notiert, umgesetzt. |
|  D | Meter-bar             | Mithilfe des HTML-Elements `<meter>`  kann entweder ein skalarer Wert innerhalb eines bekannten Bereichs oder ein Bruchwert dargestellt werden (Anwendung finden kann dies zum Beispiel als Lovebar bzw. Love'O'Meter / damage-bar etc.). Wird dieses Element verwendet und unter welchen Bedingungen füllt sich die _meter-bar_ bzw. sinkt der Wert? Welchen Zweck erfüllt sie? | Die Meter-Bar dient dem Spieler dazu, den Spielfortschritt einzusehen. Nach Beenden einer Szene steigt der Wert der Meter-Bar dementsprechend an. |


##  Abgabeformat

* Die Konzeption soll als .pdf-Dokument abgegeben werden.
* Platziere einen Link in der Readme-Datei deines VisualNovel-Repositories auf Github auf die fertige und in Github-Pages lauffähige Anwendung.
* Platziere ebenso Links zu den Stellen in deinem Repository, an denen der Quellcode und das Konzept-Dokument zu finden sind.
* Stelle zudem auf diese Art dort auch ein gepacktes Archiv zur Verfügung, welches folgende Daten enthält
  * Das Konzept-Dokument 
  * Die Projektordner inklusive aller erforderlichen Dateien, also auch Bild- und Audiodaten
