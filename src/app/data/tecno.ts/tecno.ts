export interface IconData {
    name:string;
    component: React.FC<any>; 
}
import Hashi from '../../technologies/Hashi';
import Decrypto from '../../technologies/Decrypto';
import CDN from '../../technologies/CDN';
import Alekai from '../../technologies/Alekai';
///////////////////////////////////////////////////////
import EMP from '../../technologies/Next';
import Dfria from '../../technologies/Astro';


const technologiesData: IconData[] = [
    { name: '@Hashi', component: Hashi },
    { name: '@Decrypto', component: Decrypto },
    { name: '@Club de negocios', component: CDN },
    { name: '@Alekai', component: Alekai },
    { name: '@EMP', component: EMP },
    { name: '@La ducha fria', component: Dfria },
  ];

export default technologiesData;