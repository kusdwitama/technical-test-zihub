<template>
  <div class="fixed bg-custom-dark top-[13%] left-[16%] h-[85%] right-4 rounded-2xl border border-sky-500 overflow-y-auto">
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
        { id: 'DC7E86CF-0949-4094-A882-FC388A614700', admissionId: '240608.051638', patientNik: '3206085405880001', patientSid: 'P01273630671', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A883-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880002', patientSid: 'P01273630672', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A884-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880003', patientSid: 'P01273630673', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A885-FC388A614700', admissionId: '240006.051638', patientNik: '3206085405880004', patientSid: 'P01273630674', practitioner: '3206085', status: 'FAILED' },
        { id: 'DC7E86CF-0949-4094-A886-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880005', patientSid: 'P01273630675', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-D949-4094-A887-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880006', patientSid: 'P01273630676', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A888-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880007', patientSid: 'P01273630677', practitioner: '3206085', status: 'DRAFT' },
        { id: 'DC7E86CF-D949-4094-A889-FC388A614700', admissionId: '240006.051638', patientNik: '3206065405880008', patientSid: 'P01273630678', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-D949-4094-A890-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880009', patientSid: 'P01273630679', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A891-FC388A614700', admissionId: '240008.051638', patientNik: '3206065405880010', patientSid: 'P01273630680', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A892-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880011', patientSid: 'P01273630681', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A893-FC388A614700', admissionId: '240608.051638', patientNik: '3206065405880012', patientSid: 'P01273630682', practitioner: '3206085', status: 'SUCCESS' },
        { id: 'DC7E86CF-0949-4094-A894-FC388A614700', admissionId: '240008.051638', patientNik: '3206085405880013', patientSid: 'P01273630683', practitioner: '3206085', status: 'FAILED' },
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
