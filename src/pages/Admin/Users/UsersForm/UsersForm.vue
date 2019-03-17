<template>
  <form
    class="users-form"
    @submit.prevent="handleSubmit"
  >
    <div>
      <div class="form-group">
        <input
          type="text"
          name="firstName"
          class="form-control"
          placeholder="First name"
          :value="user.firstName"
          @change="handleChange"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          name="lastName"
          class="form-control"
          placeholder="Last name"
          :value="user.lastName"
          @change="handleChange"
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'UsersForm',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    handleSubmit() {

    },
    handleChange($event) {
      const { target } = $event;
      const { name, value } = target;
      this.user = {
        ...this.user,
        [name]: value,
      };
    },
  },
};
</script>

<style lang="scss">
  .users-form {
    max-width: 30rem;
  }
</style>
