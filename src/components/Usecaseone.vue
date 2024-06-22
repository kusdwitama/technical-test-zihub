<template>
<div class="bg-gray-900 text-gray-100">
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3 bg-gray-800 p-4 rounded">
      </div>
      <div class="col-span-9 bg-gray-800 p-4 rounded">
        <h2 class="text-xl font-bold mb-4">
          Use Case 1
        </h2>
        <div class="flex items-center mb-4">
          <div class="mr-4">
            <label for="from_date" class="block text-gray-400 text-sm font-bold mb-2">
              From Date
            </label>
            <input type="date" id="from_date" value="2024-02-22" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div>
            <label for="to_date" class="block text-gray-400 text-sm font-bold mb-2">
              To Date
            </label>
            <input type="date" id="to_date" value="2024-02-22" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
        </div>
        <div class="flex items-center mb-4">
          <div class="mr-4">
            <label for="status" class="block text-gray-400 text-sm font-bold mb-2">
              Status
            </label>
            <select id="status" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="semua">Semua</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
          <div>
            <label for="search" class="block text-gray-400 text-sm font-bold mb-2">
              SO / NIK / Admission ID
            </label>
            <div class="relative">
              <input type="text" id="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type here...">
              <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="table-auto w-full text-sm">
            <thead>
              <tr>
                <th class="px-4 py-2">
                  No
                </th>
                <th class="px-4 py-2">
                  Status Satusehat
                </th>
                <th class="px-4 py-2">
                  ID Satusehat
                </th>
                <th class="px-4 py-2">
                  Admission ID
                </th>
                <th class="px-4 py-2">
                  Patient NIK
                </th>
                <th class="px-4 py-2">
                  Patient SID
                </th>
                <th class="px-4 py-2">
                  Practitioner
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2">
                  1
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  2
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  3
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  4
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Failed</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  5
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  6
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  7
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Draft</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  8
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  9
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Success</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">
                  13
                </td>
                <td class="px-4 py-2 flex items-center">
                  <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Failed</span>
                </td>
                <td class="px-4 py-2">
                  DC7E86CF-0949-4094-4882-FC388A614700
                </td>
                <td class="px-4 py-2">
                  240608.051638
                </td>
                <td class="px-4 py-2">
                  3206085405880001
                </td>
                <td class="px-4 py-2">
                  P01273630673
                </td>
                <td class="px-4 py-2">
                  3206085
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>