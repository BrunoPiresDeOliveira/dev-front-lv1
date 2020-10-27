import React from 'react';
import PageHeader from '../../components/header/pageHeader';

import './styles.css';

function About() {
  return (
    <div id="page-about">
      <PageHeader title="Sobre" />
      <div className="about-content">
        <h2>Quem somos?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris non maximus dui, sed lobortis est. Fusce lacinia
          venenatis sagittis. Praesent pulvinar massa vitae diam cursus,
          ac cursus lacus mollis. Nunc fermentum volutpat felis,
          eget commodo arcu feugiat semper. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Duis libero mi, accumsan in tempus quis,
          varius eget ex. Quisque ultricies luctus leo vel suscipit.
        </p>

        <h2>O que fazemos?</h2>
        <p>
          Donec dolor est, efficitur eu interdum eu, tincidunt ut risus.
          Mauris ultrices aliquam sem sed vestibulum. Aenean quis placerat sem,
          nec condimentum odio. In faucibus dui eget justo varius,
          quis dignissim dui imperdiet. Cras efficitur varius ante vitae lacinia.
          Donec cursus diam ut tellus sagittis congue. Suspendisse quis eros vulputate,
          vestibulum quam a, ornare urna. Aenean mattis est sem,
          non posuere dolor varius sit amet. Donec gravida porttitor purus,
          eget dictum sapien blandit eget. Donec dolor turpis,
          rutrum vitae maximus iaculis, iaculis et nisl.
          Aenean sit amet viverra augue. Vestibulum sit amet bibendum nibh,
          ut sollicitudin velit. Nam tincidunt vitae sem id cursus.
        </p>

        <h2>Qual a nossa história?</h2>
        <p>
          Mauris tempus efficitur placerat. Pellentesque sit amet est lobortis,
          commodo ex eget, cursus enim. Etiam diam urna, porta sed malesuada non,
          elementum vel justo. Fusce a sapien id dui gravida laoreet at et risus.
          Vestibulum id ipsum sapien. Nunc feugiat ultricies orci sed pulvinar.
          Donec mollis ultricies eros, eu molestie lorem auctor eu.
          Pellentesque imperdiet est et turpis euismod molestie.
          Donec pharetra velit sed neque blandit, ornare venenatis orci auctor.
          Etiam fringilla diam eget neque fermentum porta.
          Maecenas porta lectus eu egestas lacinia.
        </p>
      </div>
    </div>
  )
}

export default About;
