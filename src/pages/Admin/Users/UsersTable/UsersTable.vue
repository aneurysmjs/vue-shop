<template>
  <div>
    <nav>
      <Button @click="handleCreateUser">
        Create User
      </Button>
    </nav>
    <Spinner v-if="!isLoading" />
    <Table v-if="!isLoading">
      <Thead slot="thead">
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Shop</Th>
        </Tr>
      </Thead>
      <Tbody slot="tbody">
        <Tr
          v-for="user in users"
          :key="user.id"
        >
          <Th>{{ user.firstName }}</Th>
          <Td>{{ user.lastName }}</Td>
          <Td>{{ user.shop }}</Td>
        </Tr>
      </Tbody>
    </Table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import Button from 'components/base/Button';
import Spinner from 'components/base/Spinner';

import Table, {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from 'components/base/Table';

const { mapState, mapActions } = createNamespacedHelpers('users');

export default {
  name: 'UsersTable',
  components: {
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
    Button,
    Spinner,
  },
  computed: mapState(['users', 'isLoading']),
  created() {
    this.fetchUsers();
  },
  methods: {
    handleCreateUser() {
      this.$router.push('/admin/users/new');
    },
    ...mapActions(['fetchUsers']),
  },
};
</script>

<style>

</style>
