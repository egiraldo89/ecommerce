'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import { Card } from 'egiraldo-ui';
import {Modal} from 'egiraldo-ui';
import  {Navbar} from 'egiraldo-ui';
import {Slider} from 'egiraldo-ui';
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";


export default function Home() {
  const [isOpen, setisOpen] = useState(false);

  const selectItem = (item: string) => {
    console.log('item en el app', item);

  }

  const clickLogo = () => {
    console.log('click');
  }

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className='test'>
     <Navbar urlSizeLogo={{
        url: 'https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg',
        height: 50,
        width: 70,
      }}
        dropDownTitle={'Mi cuenta'}
        accountMenu={['settings', 'profile', 'salir']}
        style={{ background: '#000000' }}
        selectItem={selectItem}
        clickLogo={clickLogo}
      />
      <br />
      <br />
      <Modal isOpen={isOpen} toggle={toggle} style={{ width: '60%', height: '50%' }}>
        <div>Yaay!!! Our Modal is rendered Properly.</div>
        <br />
        <br />
        <div style={{ width: '50%' }}>
          <Slider
            slides={
              [{
                url: 'https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg',
                width: '50%',
                height: '300px'
              },
              {
                url: 'data:image/jpeg;base64,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',
                width: '300px',
                height: '300px'
              },
              {
                url: 'https://elchiquitindelospreciosbajos.com/wp-content/uploads/2022/06/licuadora-Home-Elements_2-litros.png',
                width: '300px',
                height: '300px'
              }
              ]}
            styleContainer={{ width: '100%', height: '300px' }
          }
          leftIcon={<HiChevronLeft size={50} />}
          rightIcon={<HiChevronRight size={50} />}
          />
        </div>
      </Modal>
      <div style={{ paddingLeft: '200px' }}>
        <Card style={{ width: '200px', height: '300px' }} imageData={{
          url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRUVFRYYGBIYGhkWGBoaGBgYFhgYGRgaHBoaGhkcIS4lHB4rIBoYJjomLC8xNTc1GiU7QDs0Py40NTEBDAwMEA8QHhISHzEkIyM1ND8xOjQxNDQ/MTE/NDExND80PzE0MTE0OjE0PzQxMTE3NDYxNDQ0NzU0MTE0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABHEAACAQIEAgcEBQoEBQUBAAABAgADEQQFEiExQQYiUWFxgZETMqGxQnKSwdEHFCMzUmKC0uHwQ1SywhZTk6LTF2Nzs/EV/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EACIRAQEAAgEEAgMBAAAAAAAAAAABAhEDBBIhUTFBMmGhBf/aAAwDAQACEQMRAD8A7NERAREQEREBERARE8swG5NhA9RI6vnOHX3qqXHIMGPotzIjG9OcFS996n/QrW9SgEC0RKI/5U8D9EV3PYtO3+oieP8A1Rw3+XxVv/jT+eBfolAH5UsN/l8V9hP55kH5UcHzp4lfGkD8mMC9xKSn5T8uPvPUT61Gp9wMkML07y5zZcVTB/e1J/rAgWaJrYfG03F6bo4/dZW+RmzAREQEREBERAREQEREBERAREQEREBERA1sbUKozAMxAvZdOo+GogX8ZyDpZiMRXfQiVkTn7Qo3HtfWxHA7CdlqICCCLg8ZXM3ykL1x1l5g8R59nLzgVHK8Y+EwNJHPWN9GluNzcBerbhvuROd5/nHtHcsHvfm6EfC8610sp0kooxCrZNKX91NS2JHfYWnFMwooGOlw29/dI+JlRnyii9VyqBQQL9drD4CTxyfEgbmiB9ZpD9HKml2sRew+fjLE+NYk6iSLWtsIGkcnxPbS+008PlGJAudFu5/xmwccb8T5NPf54+mxbY7b2+cCp40MHKvsw2NjcTNgKSagDqD32IBPlpAN9/nMWLctUdrcT902csUe1Q3sLiFdTw+KxKYdWegHK2IqU0tVQCxBs5U90uuQZ4uJUstKtTAt+sQoDf8AZJ2PlK9mr6cI+lj1vZrffm6j03l0wvuJ9VfkJBmiIgIiICIiAiIgIiICIiAiIgIiICIiAmrmX6tvD7xNqa2Yfq3+qYEBm+Ap1URKqI6FRswBHAehlTxPQbAMT+iK/VdwPS8uOIfqUmP7G/pK1nedLTJC21WBPdf75hlnMflv4uDLlusY0ML0EwavdPaqbW9+4+Im0/Qugfp1PVP5ZE0ek9QVVOpTTLIpvt1SbMe7a58pcMfjVRSQQWtsLi2/AnuknJLNtvL0WeGUx+d+kAeg+H/bq+qfyzHW6B4ZrXett++o/wBs1K/SfEDVbR3G3Dwt9838n6TF1dqiWRFuHFxra9rAHYX7LyTmxrLP/P5sfrbUToFggbn2rHvqEf6QJvYTodgQ36hW+uzOPQm0iMy6R1Gt7PqLbjsWJ5i9tgNvGbNfPatOjQqIwe4K1NS3OtWHE32BF5ZyY2mXQ8uOMt15XJKKCmUQKouAABYDhwHlJfB5kmlQx0kADcchwN5XsJV/RpUYWL9a3E7jVYf3ymw2XYj3goIsNgy6uHYfxmbjymrqrRTqq3usD4G8ySohnU9ZGVvAj4jb4yUyzEuWAZiQRwO/xlTSbiIhCIiAiIgIiICIiAiIgIiICIiAmvjR+jf6rfKbEx1lurDtBHqIFVzKrbDK3C1vSc56R4lNR07tzbtI7vWX/HVQuCdjY6FNx5n8ZzKrQFWlTqqSC1RqLknYNuwbuGn5Tn5PNe30FmOG7870i2dmBKqSOZANtj29s3MDjmQPuSDYb30zdxGKYoqbBEUKotbYW+POeuj1RdWiwPXu1xfiP6TnuU14en22at+UU9bUQq8TwElsRXayKWvZQtl2UWFrWHh8ZM08toamLIvVuNQ2Oo8gRKZmdBi5VHIUXG/j2xJMv0wvJlN3W69YzE7qqi5BubSe6PY1CRQdNVOoQDfivf6SCyDA66gpvcWDO5G50qLki/p5yb6M1FNZgASOKE21AE2BPlNkx0058ndhlv51vXp0BqGgUKanUobSD2gIAD85dZVqKXekOxr/APcfulpnXHzmV3dtXMWtTby+JkZlA648DN7Nz1LdpHwufumpkq9Zj2Lb1MqJuIiEIiICIiAiIgIiICIiAiIgIiICfJ9iBSMyoH2WKXlZ/Ky/ivxnMspc/mmMA30PSrAcjZ1DEeV52HGgLVqg+6y6vUWM5fk9RRVxCW6j03FuVluZz56let0luXHf1Yhs4xIVUdbgMB7wJ3PHfa8+5PiEV1KkHURqb8e7jLrXp02w7MyK2rY3AtKq+Jbla3hsJz7lmnr4d2Vt+p48+230nz5RqSjvvu1uqDzNxxMg6b7A939mbddgy6bDrC3InfsnrEZStFRdyWtw7ByvEsk0klmWp5jYytrUsS4sGFNlB59dlFvCwMw9FUf85Qm2nq2tffrAW+ZmDDKUoYhrmzuiXPcCbf8AeJN9CWLOw5XB81B5+fxm/H6ji5LNZ5bdKytdVVf3Vv8AD+sscgsiS71W5A6B5f8A5J0zpeDUNntT3V8/U7fIzNkqdVj2m3kB/WROZV9bm3M7eA2+4HzlhwVLSir3b+J3gbMREIREQEREBERAREQEREBERAREQERECEzlBrQngwZD8xOYvgvZZmif4bM6b8SHRreO9p1LpFSJpal95GVx4A2PwJlN6QZW716ddCBpCPcniVa+kePbNWc3Xb0vJMNy3Us/rTqUlFNdZsiHh+1blKvj8Kw64RlRydIP3Djz2+EtebqEqFbnUyM9ItuiGx2Atu1wdz2iQxwuJSstelUNWm502UkqTYmwLe5vbv5TROH29GdZJ+P37ReHdKQ1tvU4ItvdPaR290z4bLne1fEHRQva54k8BdeIW/E+MueV5XTZFZ6ae0W92C73ve9z4yv51gKKaqh1OSzEpuFJBsTx4gEj48plOLV3fLDLre6duM17Yc8zMLhkOhWZy4TUoIAB069JHEBNpt9CqYWlUbn7QgHsDEGwPZYTxmztqwyNSuXQD3iFV2OrTa3W3Mn8nwBFNUsAQwLWFtTabWsPKbpPLhzz1hZ7W/o/S00VvxYlj5/2Zt4yppU9p28O0+k9UAFRRfqqo38BIHM8eWJC8D1R4ds2ON4y6j7Srf6I38hLTI7J8LoS5HWbfy5SRhCIiAiIgIiICIiAiIgIiICIiAiIgIiIGKtTDKyngwIPmLSnY6kWougI10yRuSB5kWl1lfzLC2qsfouu45E2sfu9ZKyxuqr+OoApT4tUCkqeKkgE2vy3uJXWR3CthtfsnY60AYlHPvABd++4lvzOsUp6aKgHdOtuFtY7+P3zVyB2dHcAiqSVdLaQnPjzvtY90xs26ePPtm7GHJ8K9FLtqTq/TKjXc8bLsuxmatlSaFVRZL3YHcglgTuTvc85sphHJd9TWfZVbrBRfl3d0kalA6Rc3cWuLjnzv90SMMs7btCYTAh64dhcg60JN7CxJAHLgo8JNiyjqg6iSL+W5mHCqAWZRsoK3vx7gJtUcOzjqi68NV7C3jx5DhLGrKo9qxC6Lm3Zf+7SRyrLLnW48B2/0m/hcsRN7Xbv4eQm/MmO32IiEIiICIiAiIgIiICIiAiIgIiICIiAiIgfDKLUz1sSxakp002dCLMesGZbmw4XUi/dLT0gxvscPWqA2ZUOn6x2X4kSFfLqNLD631ltCsx1spLEbAabczJViIoPX01WqDq6rJcFiO0sb+XPhI384q03FRGGu4B0q1yL8Gsd148trzfo5g1ihLaDyDv877zzQoIp1JrRrEXRyDY8YZbShzFG/SArpv8ASt6Ag289pFPj6jVSSy+zBOkAEi3I3BFzMb5ZTItqqdnv8r3t6iZMNQSluurV2k/Lsg2k0xLqNGkkmzLseBFwSBfSD8N5J5XnK+2p4W+p2pPW2t1AjIpUre4uX28DK6MQHZmZnVrWulR0Yi/AsDe0nqWFpU1XEqW1gqGZm1sUdlDAs254348oY1Z4iJUIiICIiAiIgIiICIiAiIgIiICIiAiIgIifDAqHTlzUNDCoetVfU3cq7b+pP8M1ulmKChKK8AAx8Bsg+BPkJly5xWxOIxTfq0JpUzy0p7zDx3P8UrOYYo1KjufpG/gOCj0t8ZFj7SebdJ5HoZuUYVt6pgqtMgMxVYGstTSwPLgZP4FjVw1fD/S03Tv5j5fGVypN7KsZodH7DpbwhF8yLHe2w9Op9IqA3cy7N8QZJSu5IfZ161H6D2xFPs6x01APBtJ85YpUIiICIiAiIgIiICIiAiIgIiICIiAiIgJFdJMUaeGrOPe0lV+s3VHxMlZXulJ1fm9HlUrKW70QFm/2wIrMaYw2DSkuxICN4nd/WxEqKds2+mmMeq6UKZ3SpUZ/EvZfH3pv4PIn0jURfnv/AEkVFrNhGkt//IA4/M/hI7MK9KlrDblE1uA24XewF/eYhWIUb7QAqzw7z270gba0Btq9/bT27jbn6HsnxKAcakKsvC4YEX8QIGo5njDVBr0ngfxmerl78gPX+kjsdhXQB9OykE2bcC+/Lh4QL8h0jDuffpNuRzpsyo1+7rKf4ZbJSMgdnwwov+s0VUJ43A9noN+fvqby25fX10qb/tojfaUH75UbUREBERAREQEREBERAREQEREBERAREQErWZdbHUV5U6Lv5uwQSyysBr4zEseCJST0VnP3QOc+315pW/ZNVyPt7ToizmGToxxgqHg9j5nQSfifSdMvIDvyvvxtzkFj8ArM7FGZWZHI1oqsyBQpudwBYG17XXvm5mV0V6yBnqKhKoN9VgbLYbmc8z2oTZ8fWclt0wtHqBV5a9V9PLiNXeOEotNPAUdV0pktvwqqbA6r2UNYbnkBa+3OSWHUIgULoRAFAJBsqgcwZyg4/BOVU0atIJ1UenW1Oo7bMtjwHYZZsrzlqXs0r1hWwtVtFOtpOpdj1XN9jfSCDyN724Bc734biaWaD9E/1W+U3EQKLD8B6TVzP9U/1W+RgYugGYs+JrIx6qUwV7iPZg//AFj0nQciP6IL+w9Sn5JUZR8AJy38n404z66up+M6hlDdauP/AHA4/jpo3zLSCUiIlCIiAiIgIiICIiAiIgIiICIiAiIgJTPa2XHVO161vCmgQS5EzntatbAVn4F1qP8Abc/hAquSJ+kw7fuJ8VWdAJlFyVNsO3LQg8wo/Ay76tpFYsRU0qzdgJ9BecLzzEPUquzG7Ekn1M7lWFwQeB29ZyDpDlppVGB77HkRxv8AP+xKit6TJvKjroV6Le6ULr3Ol2BHkrD+KaWgSzdF8FZtdtuA7/739YFtyTMGahSL6SdCo7at9asUba2/AG/fN3MB+jf6p+UyUEGkCwsOG3Dw7J4x/uN3i3mdhAhOivUxdH65HwYTp+XG1eqO1KZ81aop+QnLMvfRiaR5CqPi1vvnUcPtiV/epuPsujD/AFmSLUzERKhERAREQEREBERAREQEREBERAREQNfGKSjhffKsF8bG3xnI8f0honAth+stXSq2K3U2JJswv287Tsk/P/S7B+zxFdALAVGt4E3HwIgTuTFXpaEqaXA6pFmUMLe8PH5yQTOXp9WvTdGHEqpem3epG9u6cwp4h6ba0co45g29eRHcZYMJ06xCCzqj9/WRvPSbegkVb26UYbm9vFKg/wBsj8zx2BxC6XqUz2XDgjwOnaRP/Hb86I/6jfes8HptfjQX7an505R4TKMCDcVkYX2BdyPQiS+GxmGT/Gp/aP8ALIo9NF/y6eqf+OfD0xX/AC6+qf8AjhFi/wCIMOOFZD4az8lmucyauwWgC2+7lWWkg5nrWLt2CQg6aW4UF+0o+STRzDplXcaUC01/duW9Tt8JFTOY1qdF1GvdHUktbUdwbAAbgC3KdCybpHh8TiaaYdi5UOznQ6qF0KNtQF+sFnAS5Y3JJJ3JJJJ8SZ078lddKTVaj8SqovmdTfJZUdinyRq5uh4GexmCdsCQiai4pTznsVx2wNiJh9qO2fRUHbAyxPIaeoCIiAiIgIiICIiAiIgJzjp70Sq1qhr0bMWADJwNwLXB4HYDadHiB+ccV0Xxq3vhqnkAfkZotkWJ50KijvXefprSOyeTSXsED8v1cnq/8txMDZXUH0W9J+o2wqHio9JhbKqJ4019BA/L5y6p2N6T5+YP+y0/Tb5DhzxpJ9kTC3RnCn/CX0ED82DCOPovf4TycO/DQ1+5SZ+kT0Vwv/LUeU9r0Zw44JA/O+Fyqu5FqT+YIHxl2yrKqqIBax4m06uuQ0RwWZ1yumOCwqgYbCVR2yQo4ep3y6DBp2T6MKvZBtXKFF5uIjyYGHHZPXsRCI1VaZVVpveyE+imIGGleZ1n0LPtoH2IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnwxED7PkRACJ9iAiIgIiICIiB//Z',
          width: 150,
          height: 200,
          position: 'top'
        }}>
          <div style={{ width: '100%', height: '100%' }}>
            <div style={{ width: '100%', height: '50%', display: 'inline-flex', justifyContent: 'space-between' }}>
              <h2><b>licuadora</b></h2>
              <h2>$500</h2>
            </div>
            <div>
              <p>
                textos y los  logróien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
              </p>
              <button onClick={toggle}>Open Modal </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
