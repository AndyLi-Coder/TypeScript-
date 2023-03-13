import fetch from "..";


interface IHomeDataType {
  data: any,
  returnCode: string,
  success: boolean
}
fetch.request<IHomeDataType>({
  url: '/home/multidata',
}).then(res => {
  console.log(res.data, res.returnCode, res.success, '++')
})