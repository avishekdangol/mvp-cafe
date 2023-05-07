<template>
  <section class="about">
    <div class="header">
      <div class="wrapper row gap-4 justify-content-center">
        <!-- <h4 class="align-self-center">Since 1999</h4> -->
        <div class="container about-info col-md-7 col-sm-12 px-5">
          <div class="my-4">
            <h1 class="text-center fw-bolder p-4">
              Who we are
            </h1>
            <p class="align-self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, explicabo molestiae! Amet, ad asperiores quia cumque natus iure et laudantium commodi assumenda veniam consequuntur ipsum quisquam culpa praesentium vitae vero? lorea
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat modi, eos cum vel aut, vero quidem id nulla, consequatur corrupti ratione dolorum architecto voluptates porro. Eius ratione quos laudantium ad.
            </p>
          </div>
          <div class="my-4">
            <h1 class="text-center fw-bolder">
              Why choose us
            </h1>
            <P class="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sit officia corporis laboriosam recusandae molestias animi maiores porro nesciunt pariatur doloremque perferendis aperiam id, cumque numquam sed, ullam placeat quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni, vitae neque nisi mollitia quia natus magnam perferendis doloribus sequi officia sapiente nesciunt? Fuga omnis nesciunt aperiam delectus molestias ipsa.
            </P>
          </div>
        </div>
        <div class="img-wrap">
          <img
            class="col-md-4 col-sm-12"
            src="/storage/about/serve.jpg"
            alt="img"
          >
        </div>
      </div>
    </div>
    <div class="wrapper d-flex justify-content-center p-5">
      <!-- <img
        src="/images/about/qoute-light.png"
        alt="qoutes"
        width="400"
        height="290"
      > -->
      <figure class="text-center">
        <blockquote class="blockquote">
          <div
            class="fs-3 quote position-relative"
          >
            <font-icon
              icon="quote-left"
              class="position-absolute top-0 start-0"
            />
            <font-icon
              icon="quote-right"
              class="position-absolute bottom-0 end-0"
            />
            <p class="p-4">
              A recipe has no soul.
              You , as the cook,
              must bring soul to the recipe
            </p>
          </div>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">Thomas Keller</cite>
          </figcaption>
        </blockquote>
      </figure>

      <!-- <p class="align-self-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci aperiam molestias fuga exercitationem nostrum quod earum esse eius rerum voluptatem accusantium, dolor maiores debitis, tenetur unde magni sint minus.
      </p> -->
    </div>

    <div class="images" />

    <div class="container my-5 w-80">
      <div class="row my-5">
        <div
          class="col-lg-6 align-self-center"
        >
          <h4 class="my-4">
            Team
          </h4>
          <p>Teamwork is essential in the food industry. All food service operations require teamwork in order to ensure that food is prepared and served safely and efficiently. Teamwork helps to ensure that all tasks are completed in a timely manner and at a high quality level.</p>
        </div>
        <img
          src="/storage/about/team.jpg"
          alt="images"
          class="col-lg-6"
        >
      </div>
      <!-- <h1 class="">Meet our Team</h1> -->
      <div class="teams row justify-content-between">
        <h1 class="text-center my-4">
          Meet our Team
        </h1>
        <div
          v-for="member , index in teamMembers"
          :key="index"
          class="col-lg-3 col-md-6 mb-3"
        >
          <div class="card p-3">
            <div class="row py-2">
              <div class="col-md-4 col-sm-3 col-4">
                <img
                  src="/storage/about/blank.png"
                  :alt="member.name"
                  class="member-img rounded-circle img-fluid"
                >
              </div>
              <div class="col-md-8 col-sm-9 col-8">
                <div>
                  <h5 class="card-title fs-6 mb-0">
                    {{ member.name }}
                  </h5>
                  <div class="card-text fs-7 muted mb-2">
                    <small>{{ member.title }}</small>
                  </div>

                  <div class="media d-flex gap-4 sm-card-media">
                    <a
                      href="#"
                      class="nav-link"
                    >
                      <font-icon :icon="{ prefix: 'fab' , iconName: 'facebook'}" />
                    </a>
                    <a
                      href="#"
                      class="nav-link"
                    >
                      <font-icon :icon="{ prefix: 'fab' , iconName: 'instagram'}" />
                    </a>
                    <a
                      href="#"
                      class="nav-link"
                    >
                      <font-icon :icon="{ prefix: 'fab' , iconName: 'twitter'}" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { ref } from 'vue'

export default {
  setup() {
    const background = ref('url("/storage/about/background.jpg")')
    const teamMembers = [
      {
        id: 0,
        name: 'John Doe',
        title: 'Manager',
      },
      {
        id: 1,
        name: 'David White',
        title: 'Chef',
      },
      {
        id: 2,
        name: 'Angela Smith',
        title: 'Sous Chef',
      },
      {
        id: 3,
        name: 'Tom Shelton',
        title: 'Barista',
      },
    ]

    return {
      background,
      teamMembers,
    }
  },
}
</script>

<style lang="scss" scoped>
.w-80{
    width: 80%;
  }
.dark-layout {
  .about .about-info {
    color: #101010;
  }
}
 .about {
  .header{
    background-color: #F9D9AA;
    .container{
      img{
        object-fit: cover;
      }
    }
    .wrapper {
      height: 500px;

      .img-wrap {
        width: 500px;
        height: 500px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
   .images{
    background-image: v-bind(background);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
  }
 }
 .quote{
  width: 100%;
 }

</style>
