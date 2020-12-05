Wildbook blends structured wildlife research with artificial intelligence, citizen science, and computer vision to speed population analysis and develop new insights to help fight extinction.

## Why Wildbook?

According to a July 2017 [study in the Proceedings of the National Academy of Sciences](https://pubmed.ncbi.nlm.nih.gov/28696295/), a “sixth mass extinction” is underway, a trend signalled by widespread vertebrate losses that “will have negative cascading consequences on ecosystem functioning and services vital to sustaining civilization.” This meta-study is based on multiple, independent analyses and represents a growing awareness in the wildlife research community that more rapid assessment, response, and review are needed to understand and counter this decline.

Unfortunately, wildlife research efforts are frequently underfunded and small scale. The collection and management of wildlife data remains a largely ad hoc and academic exercise focused on moving small data sets (often in Excel and Access) into local, custom population studies for “one-off” analyses without long-term data curation or collaboration across borders and regions. Arriving at a critical mass of data for population analysis can take years (especially for rare or endangered species). Long required observation periods and manual data processing (e.g., matching photos “by eye”) can create multi-year lags between study initialization and scientific results, as well as create conclusions too coarse or slow for effective and optimizable conservation action. This limits the scope, scale, repeatability, continuity, and ROI of the studies as they face the limits of their home-grown tools and IT capabilities.

Wildlife researchers lack a common yet customizable platform for collaboration and often don’t have the technical experience or budget to take advantage of advanced computing tools (e.g., computer vision, artificial intelligence). These tools allows projects to obtain, curate, and analyze “Big Data”, such as the potential of citizen scientists to collect and contribute large volumes of wildlife data through tourism and volunteerism.

## Data Management in the Cloud 

Wildbook is an open source software framework to support collaborative mark-recapture, molecular ecology, and social ecology studies, especially where citizen science and artificial intelligence can help scale up projects. It is developed by the non-profit Wild Me (PI Jason Holmberg) and research partners at the University of Illinois-Chicago (PI Tanya Berger-Wolf), Rensselaer Polytechnic Institute (PI Charles V. Stewart), and Princeton University (PI Daniel Rubenstein).

Wildbook provides a technical foundation (database, APIs, computer vision, etc.) for wildlife research projects that are:

 - tracking individual animals in a wildlife population using natural markings , genetic identifiers, or vocalizations
 - collecting biological samples from a wildlife population and performing genetic and/or chemical analyses (e.g., stable isotope measurements, haplotype determination, etc.)
 - engaging citizen scientists and\or using social media to collect sighting information
 - looking to build a collaborative, distributed research network for a migratory and/or global species
 - looking to develop a new animal biometrics solution (e.g., pattern matching from photos) for one or more species
 - collecting behavioral and/or social data for a wildlife study population

The biological and statistical communities already support a number of excellent tools, such as Program MARK,GenAlEx, and SOCPROG for use in analyzing wildlife data. Wildbook is a complementary software application that:

 - provides a scalable and collaborative platform for intelligent wildlife data storage and management, including advanced, consolidated searching
 - provides an easy-to-use software suite of functionality that can be extended to meet the needs of wildlife projects, especially where individual identification is used
 - provides an API to support the easy export of data to cross-disciplinary analysis applications (e.g., GenePop ) and other software (e.g., Google Earth)
 - provides a platform that supports the exposure of data in biodiversity databases (e.g., GBIF and OBIS)
 - provides a platform for animal biometrics that supports easy data access and facilitates matching application deployment for multiple species

## Gateway to A.I. and Computer Vision

Images have become the most abundant, available and cheap source of data. The explosive growth in the use of digital cameras, together with rapid innovations in storage technology and automatic image analysis software, makes this vision possible particularly for large animals with distinctive striped, spotted, wrinkled or notched markings, such as elephants, giraffes and zebras. This large number of collected images must be analyzed automatically to produce a database that records who the animals are, where they are, and when they were photographed. Combining this with geographic, environmental, behavioral and climate data would enable the determination of what the animals are doing, and why they are doing it.

Wildbook evolved out of multi-disciplinary, collaborative research conducted under National Science Foundation support (see ibeis.org). Wildbook employees computer vision and A.I. components to detect features in submitted images and detect and then identify individual animals. Wildbook brings massive-scale computer vision to wildlife research for the first time.

Wildbook integrates the data management software of Wild Me with the computer vision and A.I. research of RPI. Wildbook includes a two-part, multi-species computer vision pipeline to find and identify individual animals in photos collected under real-world conditions, especially with citizen science contribution.



