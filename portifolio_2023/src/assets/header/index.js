import contact from './contact.svg';
import contact_selected from './contact-selected.svg'
import perfil from './perfil.svg';
import perfil_selected from './perfil-selected.svg';
import projects from './projects.svg';
import projects_selected from './projects-selected.svg';
import tecnologies from './tecnologies.svg';
import tecnologies_selected from './tecnologies-selected.svg';

const headerIcons = {
  perfil: { normal: perfil, selected: perfil_selected },
  projects: { normal: projects, selected: projects_selected },
  tecnologies: { normal: tecnologies, selected: tecnologies_selected },
  contact: { normal: contact, selected: contact_selected },
}

export default headerIcons;