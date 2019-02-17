<template>
  <Table>
    <Thead slot="thead">
      <Tr>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Price</Th>
        <Th>Shop</Th>
      </Tr>
    </Thead>
    <Tbody slot="tbody">
      <Tr
        v-for="product in products"
        :key="product.name"
      >
        <Th>{{ product.name }}</Th>
        <Td>{{ product.price }}</Td>
        <Td>{{ product.stock }}</Td>
        <Td>{{ product.shop }}</Td>
      </Tr>
    </Tbody>
  </Table>
</template>

<script>
import Table, {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from 'components/base/Table';

export default {
  components: {
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>

</style>
