const service = {
  remote: 'wss://api.salesaction.pk:8448',
  methods: {
    20000: {
      name: 'Init',
      parameters: ['userPublicId', 'token', 'deviceId', 'deviceOS', 'organizationPublicId'],
    },
  },
}

export default service
