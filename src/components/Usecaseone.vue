<template>
<div class="fixed bg-custom-dark top-[13%] left-[16%] h-[85%] right-4 rounded-2xl border border-sky-500 overflow-y-auto">
  <div class="relative uppercase text-white px-5 py-3 flex items-center">
    <h1 class="text-2xl font-bold mr-4">Use case 1</h1>
    <div class="border-r border-white h-8 mr-4"></div>
    <button class="border border-white rounded-lg px-2 py-1 hover:bg-blue-300">
        <font-awesome-icon icon="fa-solid fa-table-cells-large" /> Dashboard
    </button>
    <button class="border border-white rounded-lg px-2 py-1 ml-4 hover:bg-blue-300">
        <font-awesome-icon icon="fa-solid fa-bars" /> Encounter
    </button>
    <button class="border border-white rounded-lg px-2 py-1 ml-4 hover:bg-blue-300">
        <font-awesome-icon icon="fa-solid fa-bars" /> Condition
    </button>
  </div>
    <div class="ml-auto">
    <div class="border-b-2 border-white h-3 ml-4 mr-4"></div>
    <div class="relative uppercase text-white px-5 py-3 flex items-center space-x-4 text-xs">
        <div class="pr-[9.5%]">from date</div>
        <div class="pr-[10.5%]">to date</div>
        <div class="pr-[11.5%]">status</div>
        <div>sid / nik / admission id</div>
    </div>
  </div>
  <div class="flex items-center ml-4">
    <input type="date" class="text-white p-1 rounded-lg block bg-transparent border border-white text-xs h-8 w-[15%]" />
    <input type="date" class="text-white p-1 rounded-lg ml-2 bg-transparent border border-white text-xs h-8 w-[15%]" />
    <select class="text-white p-1 rounded-lg ml-2 bg-transparent border border-white text-xs focus:bg-custom-dark h-8 w-[15%]">
        <option>Semua</option>
        <option>Success</option>
        <option>Failed</option>
        <option>Draft</option>
    </select>
    <input type="text" class="text-white p-1 rounded-lg ml-2 bg-transparent border border-white text-xs h-8 w-[15%]" placeholder="Type here..." />
    <button class="border border-white rounded-lg px-2 py-1 ml-4 hover:bg-blue-300 h-8 w-[3%]">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <button class="border border-white rounded-lg px-2 py-1 ml-4 hover:bg-blue-300 h-8 w-[15%]">
        <font-awesome-icon icon="fa-solid fa-download" /> Eksport To Excel
    </button>
    <button class="border border-white rounded-lg px-2 py-1 ml-4 hover:bg-blue-300 h-8 w-[15%]">
        <font-awesome-icon icon="fa-solid fa-plus" /> Add Data
    </button>
</div>
<div class="overflow-x-auto px-4">
    <table class="min-w-full text-xs font-medium uppercase text-blue-300 bg-table-bot mt-4">
        <thead>
            <tr class="text-left">
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
            <tr v-for="(item, index) in items" :key="index" :class="{ 'bg-table-top': index % 2 === 0, 'bg-table-bot': index % 2 !== 0 }" class="text-sm">
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis" :class="{ 'text-green-500': item.status === 'SUCCESS', 'text-red-500': item.status === 'FAILED', 'text-gray-400': item.status === 'DRAFT' }">
                    <span class="border rounded-full px-2 py-1 inline-block" :class="{ 'border-green-500': item.status === 'SUCCESS', 'border-red-500': item.status === 'FAILED', 'border-gray-400': item.status === 'DRAFT' }">
                        {{ item.status }}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-white">{{ item.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-white">{{ item.admissionId }}</td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-white">{{ item.patientNik }}</td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-white">{{ item.patientSid }}</td>
                <td class="px-6 py-4 whitespace-nowrap overflow-hidden overflow-ellipsis text-white">{{ item.practitioner }}</td>
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