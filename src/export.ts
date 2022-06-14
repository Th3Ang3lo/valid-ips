import ips from './ips.json'

import { ExportIpsService } from '@/services/export-ips-service'

import { IpFormatDTO } from '@/dtos/ip'

export const exportIps = async (): Promise<void> => {
  const exportIpsService = new ExportIpsService()

  await exportIpsService.execute(ips as unknown as IpFormatDTO[])
}
