import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('SettingsStore', {
    state: () => {
        return {
            languageEnglish: true,
            languageGerman: false,
            darkMode: true,
            lightMode: false,
            overlayActive: false,

            en: {
                navigation: {
                    about: 'About',
                    skillset: 'Skillset',
                    projects: 'Projects',
                    contact: 'Contact',
                },
                aboutView: {
                    viewName: 'About',
                    canvas: {
                        me: 'Me',
                        experience: 'Experience',
                        education: 'Education',
                    },
                    aboutMeHeading: 'About Me',
                    myWorkExperienceHeading: 'My Work Experience',
                    myEducationHeading: 'My Education',
                    aboutMeContent: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
                        + "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
                        + "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, "
                        + "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        + "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum "
                        + "dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et "
                        + "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, "
                        + "no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse "
                        + "molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit "
                        + "praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                        + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud "
                        + "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse",
                    jobs: [
                        {
                            id: 1,
                            date: 'September 2021 - October 2022',
                            duration: '1 year 2 months',
                            title: 'Working Student in Sales',
                            company: 'LIDL Vertriebs-GmbH & Co. KG',
                            location: 'Braunschweig, Germany',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                        {
                            id: 2,
                            date: 'July 2015 - September 2018',
                            duration: '3 years 3 months',
                            title: 'Service Technician',
                            company: 'TELCAT Multicom GmbH',
                            location: 'Peine, Germany',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                        {
                            id: 3,
                            date: 'September 2012 - July 2015',
                            duration: '2 years 11 months',
                            title: 'Electronics Technician Trainee',
                            company: 'R.PAPE GmbH',
                            location: 'Braunschweig, Germany',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                    ],
                    schools: [
                        {
                            id: 1,
                            date: 'March 2022 - Present',
                            duration: '',
                            title: 'Electrical Engineering and\nInformation Technology',
                            school: 'Ostfalia University of Applied Sciences',
                            location: 'Wolfenbüttel, Germany'
                        },
                        {
                            id: 2,
                            date: 'October 2019 - February 2022',
                            duration: '2 years 5 months',
                            title: 'Mechanical Engineering',
                            school: 'Technical University of Braunshweig',
                            location: 'Braunshweig, Germany'
                        },
                        {
                            id: 3,
                            date: 'October 2018 - September 2019',
                            duration: '1 year',
                            title: 'Physics',
                            school: 'Technical University of Braunshweig',
                            location: 'Braunshweig, Germany'
                        },
                        {
                            id: 4,
                            date: 'September 2012 - July 2015',
                            duration: '2 years 11 months',
                            title: 'Electronics Technician Trainee',
                            school: 'BBS-ME Otto-Brenner-Schule\nVocational School for Metal Technology and Electrical Engineering',
                            location: 'Hannover, Germany'
                        },
                        {
                            id: 5,
                            date: 'August 2011 - August 2012',
                            duration: '1 year',
                            title: 'Vocational school',
                            school: 'BBS3 Otto-Bennemann-Schule\nVocational School for Business and Administration',
                            location: 'Braunschweig, Germany'
                        },
                        {
                            id: 6,
                            date: 'July 2011',
                            title: 'Extended Secondary Certificate I',
                            school: 'Realschule Maschstraße',
                            location: 'Braunschweig, Germany'
                        }
                    ]
                },
                skillsetView: {
                    viewName: 'Skills',
                },
                projectsView: {
                    viewName: 'Projects',
                    projects: [
                        {
                            id: 1,
                            title: 'Project 1',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                            image: 'https://picsum.photos/200/300',
                            link: 'https://www.google.com',
                            linkText: 'Link to Project 1',
                        },
                        {
                            id: 2,
                            title: 'Project 2',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                            image: 'https://picsum.photos/200/300',
                            link: 'https://www.google.com',
                            linkText: 'Link to Project 2',
                        },
                    ],
                },
                contactView: {
                    viewName: 'Contact',
                    email: 'Email',
                    emailAddress: 'contact@tobiasweinlich.com',
                    media: 'Media',
                }
            },
            de: {
                navigation: {
                    about: 'Info',
                    skillset: 'Skills',
                    projects: 'Projekte',
                    contact: 'Kontakt',
                },
                aboutView: {
                    viewName: 'Über',
                    canvas: {
                        me: 'Mich',
                        experience: 'Erfahrung',
                        education: 'Ausbildung',
                    },
                    aboutMeHeading: 'Über Mich',
                    myWorkExperienceHeading: 'Meine Berufserfahrung',
                    myEducationHeading: 'Meine Ausbildung',
                    aboutMeContent: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
                        + "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
                        + "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, "
                        + "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                        + "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum "
                        + "dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et "
                        + "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, "
                        + "no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse "
                        + "molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit "
                        + "praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                        + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud "
                        + "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse",
                    jobs: [
                        {
                            id: 1,
                            date: 'September 2021 - Oktober 2022',
                            duration: '1 Jahr 2 Monate',
                            title: 'Werkstudent im Vertrieb',
                            company: 'LIDL Vertriebs-GmbH & Co. KG',
                            location: 'Braunschweig, Deutschland',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                        {
                            id: 2,
                            date: 'Juli 2015 - September 2018',
                            duration: '3 Jahre 3 Monate',
                            title: 'Servicetechniker',
                            company: 'TELCAT Multicom GmbH',
                            location: 'Peine, Deutschland',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                        {
                            id: 3,
                            date: 'September 2012 - Juli 2015',
                            duration: '2 Jahre 11 Monate',
                            title: 'Auszubildenender Elektroniker',
                            company: 'R.PAPE GmbH',
                            location: 'Braunschweig, Deutschland',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        },
                    ],
                    schools: [
                        {
                            id: 1,
                            date: 'März 2022 - Heute',
                            duration: '',
                            title: 'Elektro- und Informationstechnik',
                            school: 'Ostfalia Hochschule für angewandte Wissenschaften',
                            location: 'Wolfenbüttel, Deutschland'
                        },
                        {
                            id: 2,
                            date: 'Oktober 2019 - Februar 2022',
                            duration: '2 Jahre 5 Monate',
                            title: 'Maschinenbau',
                            school: 'Technische Universität Braunschweig',
                            location: 'Braunshweig, Deutschland'
                        },
                        {
                            id: 3,
                            date: 'Oktober 2018 - September 2019',
                            duration: '1 Jahr',
                            title: 'Physik',
                            school: 'Technische Universität Braunschweig',
                            location: 'Braunshweig, Deutschland'
                        },
                        {
                            id: 4,
                            date: 'September 2012 - Juli 2015',
                            duration: '2 Jahre 11 Monate',
                            title: 'Auszubildender Elektroniker',
                            school: 'BBS-ME Otto-Brenner-Schule\nBerufsbildende Schule für Metalltechnik und Elektrotechnik',
                            location: 'Hannover, Deutschland'
                        },
                        {
                            id: 5,
                            date: 'August 2011 - August 2012',
                            duration: '1 Jahr',
                            title: 'Berufsbildende Schule',
                            school: 'BBS3 Otto-Bennemann-Schule\nBerufsbildende Schule für Wirtschaft und Verwaltung',
                            location: 'Braunschweig, Deutschland'
                        },
                        {
                            id: 6,
                            date: 'Juli 2011',
                            title: 'Erweiterter Sekundarabschluss I',
                            school: 'Realschule Maschstraße',
                            location: 'Braunschweig, Deutschland'
                        }
                    ]
                },
                skillsetView: {
                    viewName: 'Fähigkeiten',
                },
                projectsView: {
                    viewName: 'Projekte',
                    projects: [
                        {
                            id: 1,
                            title: 'Projekt 1',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                            image: 'https://picsum.photos/200/300',
                            link: 'https://www.google.de',
                            linkText: 'Link zum Projekt'
                        },
                        {
                            id: 2,
                            title: 'Projekt 2',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                            image: 'https://picsum.photos/200/300',
                            link: 'https://www.google.de',
                            linkText: 'Link zum Projekt'
                        },
                    ],
                },
                contactView: {
                    viewName: 'Kontakt',
                    email: 'E-Mail',
                    emailAddress: 'kontakt@tobiasweinlich.com',
                    media: 'Medien',
                }
            },
        }
    },

    getters: {
/* ------------------------------ Navigation ------------------------------ */
        navigationAbout() {
            if (this.languageEnglish) {
                return this.en.navigation.about
            } else if (this.languageGerman) {
                return this.de.navigation.about
            }
        },
        navigationSkillset() {
            if (this.languageEnglish) {
                return this.en.navigation.skillset
            } else if (this.languageGerman) {
                return this.de.navigation.skillset
            }
        },
        navigationProjects() {
            if (this.languageEnglish) {
                return this.en.navigation.projects
            } else if (this.languageGerman) {
                return this.de.navigation.projects
            }
        },
        navigationContact() {
            if (this.languageEnglish) {
                return this.en.navigation.contact
            } else if (this.languageGerman) {
                return this.de.navigation.contact
            }
        },

/* ------------------------------ About ------------------------------ */
        aboutViewName() {
            if (this.languageEnglish) {
                return this.en.aboutView.viewName
            } else if (this.languageGerman) {
                return this.de.aboutView.viewName
            }
        },
        canvasMe() {
            if (this.languageEnglish) {
                return this.en.aboutView.canvas.me
            } else if (this.languageGerman) {
                return this.de.aboutView.canvas.me
            }
        },
        canvasExperience() {
            if (this.languageEnglish) {
                return this.en.aboutView.canvas.experience
            } else if (this.languageGerman) {
                return this.de.aboutView.canvas.experience
            }
        },
        canvasEducation() {
            if (this.languageEnglish) {
                return this.en.aboutView.canvas.education
            } else if (this.languageGerman) {
                return this.de.aboutView.canvas.education
            }
        },
        aboutMeHeading() {
            if (this.languageEnglish) {
                return this.en.aboutView.aboutMeHeading
            } else if (this.languageGerman) {
                return this.de.aboutView.aboutMeHeading
            }
        },
        myWorkExperienceHeading() {
            if (this.languageEnglish) {
                return this.en.aboutView.myWorkExperienceHeading
            } else if (this.languageGerman) {
                return this.de.aboutView.myWorkExperienceHeading
            }
        },
        myEducationHeading() {
            if (this.languageEnglish) {
                return this.en.aboutView.myEducationHeading
            } else if (this.languageGerman) {
                return this.de.aboutView.myEducationHeading
            }
        },
        aboutMeContent() {
            if (this.languageEnglish) {
                return this.en.aboutView.aboutMeContent
            } else if (this.languageGerman) {
                return this.de.aboutView.aboutMeContent
            }
        },
        jobs() {
            if (this.languageEnglish) {
                return this.en.aboutView.jobs
            } else if (this.languageGerman) {
                return this.de.aboutView.jobs
            }
        },
        schools() {
            if (this.languageEnglish) {
                return this.en.aboutView.schools
            } else if (this.languageGerman) {
                return this.de.aboutView.schools
            }
        },

/* ------------------------------ Skillset ------------------------------ */
        skillsetViewName() {
            if (this.languageEnglish) {
                return this.en.skillsetView.viewName
            } else if (this.languageGerman) {
                return this.de.skillsetView.viewName
            }
        },


/* ------------------------------ Projects ------------------------------ */
        projectsViewName() {
            if (this.languageEnglish) {
                return this.en.projectsView.viewName
            } else if (this.languageGerman) {
                return this.de.projectsView.viewName
            }
        },
        projects() {
            if (this.languageEnglish) {
                return this.en.projectsView.projects
            } else if (this.languageGerman) {
                return this.de.projectsView.projects
            }
        },

/* ------------------------------ Contact ------------------------------ */
        contactViewName() {
            if (this.languageEnglish) {
                return this.en.contactView.viewName
            } else if (this.languageGerman) {
                return this.de.contactView.viewName
            }
        },
        contactEmail() {
            if (this.languageEnglish) {
                return this.en.contactView.email
            } else if (this.languageGerman) {
                return this.de.contactView.email
            }
        },
        contactEmailAddress() {
            if (this.languageEnglish) {
                return this.en.contactView.emailAddress
            } else if (this.languageGerman) {
                return this.de.contactView.emailAddress
            }
        },
        contactMedia() {
            if (this.languageEnglish) {
                return this.en.contactView.media
            } else if (this.languageGerman) {
                return this.de.contactView.media
            }
        },
    },

    actions: {
        setDarkMode() {
            this.lightMode = false
            setTimeout(() => {this.darkMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color', '#ccc')
            document.documentElement.style.setProperty('--secondary-color-light', '#cccccc88')
            document.documentElement.style.setProperty('--canvas-color', '#666')
            document.documentElement.style.setProperty('--title-card-color', '#333')
        },
        
        setLightMode() {
            this.darkMode = false
            setTimeout(() => {this.lightMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#eee')
            document.documentElement.style.setProperty('--secondary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color-light', '#191919aa')
            document.documentElement.style.setProperty('--canvas-color', '#999')
            document.documentElement.style.setProperty('--title-card-color', '#bbb')
        },

        setLanguageGerman() {
            this.overlayActive = true
            setTimeout(() => {this.languageEnglish = false}, 500)
            setTimeout(() => {this.languageGerman = true}, 600)
            setTimeout(() => {this.overlayActive = false}, 800)
        },

        setLanguageEnglish() {
            this.overlayActive = true
            setTimeout(() => {this.languageGerman = false}, 500)
            setTimeout(() => {this.languageEnglish = true}, 600)
            setTimeout(() => {this.overlayActive = false}, 800)
        }
    },
})