<script setup lang="ts">
// import {MainBox} from './MainBox.vue'
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="about">
    <div id="impression">
      <p>
        I specialize in bringing enterprise development knowledge to small/medium sized businesses who want to level-up and optimize their software, infrastructure, and processes.
      </p>
      <p>
        I'm passionate about automation and building services that require less people. Nothing would make me sadder in the past than seeing talented developers spend their day clicking buttons doing repetitive tasks when they were really hired to solve interesting problems. So I've made automating those tasks my interesting problem.
      </p>
    </div>

    <TheWelcome v-if="includeFirstImpression" />

    <!--    <div id="serviceRefer">-->
<!--      <RouterLink to="/services">-->
<!--        Have a look at the services I provide.-->
<!--      </RouterLink>-->
<!--    </div>-->

    <div id="bioBox">
      <h3 class="aboutHeader">Bio</h3>
      <p>
        I began my career as a self taught web developer working for small businesses to build their homepages. From there I moved on into cloud computing at AWS where I specialized in networking and automation. This was a crash-course in everything enterprise-computing and it's hard to understate how much I learned there and the cools things I was able to do. To give you an idea, if you've ever connected to S3 using IPV6 or a VPC, I helped set that up including the provisioning automation and the addressing scheme. In fact if you've connected to S3 in the past few years, there's a good chance the load balancer you went through was built using my software.
      </p>
      <p>
        From there I dipped my toes into security working for Oracle Cloud Infrastructure working as a Principal Engineer and again automating things like logging systems and threat detection systems. Not only did I increase my infrastructure automation skills immensely, but I also got a great view of how a security organization operates and what it takes to keep the cloud safe.
      </p>
      <p>
        Following Oracle, I moved on to a freelance career taking on small business clients and helping them automate their systems and helping devs to stop clicking buttons all day.
      </p>

      <div v-if="extra" class="extraAbout">
        <h4>
          In my free time I enjoy:
        </h4>
        <ul>
          <li>Cooking. I'll make anything but my specialties are bread, sauces, pasta, and soups.</li>
          <li>Being in nature, preferably with my dog</li>
          <li>Reading. I love SciFi, existential fiction, and anything with a good twist.</li>
          <li>Writing. I enjoy writing fiction including a book I plan to release one day once things slow down and I can finally edit it.</li>
          <li>Travelling. I'd like to road trip through every state in the USA. Currently about 45% of the way there.</li>
        </ul>
      </div>

      <div id="closeImpression">
        <h3 class="aboutHeader">Get started</h3>
        <p>
          Please check out the <RouterLink to="/services">services</RouterLink> I can provide and <RouterLink to="/contact">contact me</RouterLink> to get started.
        </p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

  props: {
    extra: {
      default: false,
      type: Boolean
    },
    includeFirstImpression: {
      default: false,
      type: Boolean
    }
  },
})


// import {MainBox} from './MainBox.vue'
</script>

<style>

.about .aboutHeader {
  margin: 2em 0 .5em 0;
}

#bioBox{
  margin: 2em 0 0 0;
}

.welcome-items {
  margin: 3em 0 0 0;
}
</style>
