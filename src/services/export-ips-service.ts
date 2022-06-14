import fs from 'fs'

import { IExportIpsService } from '../contracts/services/export-ips-service'

import { extractIpv4FromString, isValidIpv4 } from '@/utils/ip'
import { isClient } from '@/utils/string'
import { object2Csv } from '@/utils/file'

import { IpFormatDTO } from '@/dtos/ip'

export class ExportIpsService implements IExportIpsService {
  public async execute (ips: IpFormatDTO[]): Promise<void> {
    const validIps = []
    const invalidIps = []

    for (const ipData of ips) {
      const message = ipData?.jsonPayload?.message

      const ip = extractIpv4FromString(message)

      const is_valid_ipv4 = isValidIpv4(ip)
      const is_client = isClient(message)

      const format = {
        ip,
        message: message
      }

      if (is_valid_ipv4) is_client ? validIps.push(format) : invalidIps.push(format)

      await object2Csv(validIps, 'ips-valid.csv')
      await object2Csv(invalidIps, 'ips-to-block.csv')
    }
  }
}
