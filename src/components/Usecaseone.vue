<template>
  <div class="fixed bg-custom-dark top-[12%] left-[16%] h-[86%] right-4 rounded-2xl border border-sky-500 overflow-y-auto">
    <div class="relative">
      <table class="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
        <thead class="sticky top-0 bg-custom-dark">
        <tr>
            <th class="px-6 py-3" colspan="8">
              <div class="flex items-center justify-between">
                <h1 class="text-lg font-bold">Use Case 1</h1>
                <div class="flex items-center gap-4">
                  <button class="text-sky-500 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 rounded-md px-2 py-1">Dashboard</button>
                  <button class="text-sky-500 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 rounded-md px-2 py-1">Encounter</button>
                  <button class="text-sky-500 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 rounded-md px-2 py-1">Condition</button>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="px-6 py-3">FROM DATE</th>
            <th class="px-6 py-3">TO DATE</th>
            <th class="px-6 py-3">STATUS</th>
            <th class="px-6 py-3">SO/NIK/ADMISSION ID</th>
            <th class="px-6 py-3">PATIENT NIK</th>
            <th class="px-6 py-3">PATIENT SID</th>
            <th class="px-6 py-3">PRACTIT</th>
            <th class="px-6 py-3"></th>
          </tr>
          <tr>
            <th class="px-6 py-3">NO</th>
            <th class="px-6 py-3">STATUS SATUSEHAT</th>
            <th class="px-6 py-3">ID SATUSEHAT</th>
            <th class="px-6 py-3">ADMISSION ID</th>
            <th class="px-6 py-3">PATIENT NIK</th>
            <th class="px-6 py-3">PATIENT SID</th>
            <th class="px-6 py-3">PRACTITIONER</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4" :class="{ 'text-green-500': item.status === 'SUCCESS', 'text-red-500': item.status === 'FAILED', 'text-gray-400': item.status === 'DRAFT' }">
              {{ item.status }}
            </td>
            <td class="px-6 py-4">{{ item.id }}</td>
            <td class="px-6 py-4">{{ item.admissionId }}</td>
            <td class="px-6 py-4">{{ item.patientNik }}</td>
            <td class="px-6 py-4">{{ item.patientSid }}</td>
            <td class="px-6 py-4">{{ item.practitioner }}</td>
            <td class="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240608.051638', patientNik: '3206085-405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240006.051638', patientNik: '3206085-405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'FAILED' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-D949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'DRAFT' },
        { id: 'DC7E86CF-D949-4094-A882-FC388A614700', admissionId: '240006.051638', patientNik: '3206065405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-D949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085-405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-882-FC388A614700', admissionId: '240008.051638', patientNik: '3206065-405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240608.051638', patientNik: '3206065405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880001', patientSid: 'P01273630673', practitioner: '3206085', status: 'FAILED' },
      ],
    };
  },
};
</script>

<style scoped>
.bg-custom-dark {
  background-color: #1a202c;
}

/* Gaya scrollbar custom */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
