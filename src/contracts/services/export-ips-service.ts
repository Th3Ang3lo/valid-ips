import { IpFormatDTO } from '@/dtos/ip'

export interface IExportIpsService {
  execute: (ips: IpFormatDTO[]) => Promise<void>
}
