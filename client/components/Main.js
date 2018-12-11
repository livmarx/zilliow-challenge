import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fgallery-pl.go-game.io%2Fuploads%2F2018%2F11%2FVk_Red%2520haired_B61936_600x500_No%2520OS_English%26IMG%3D1BSG.jpg',
              width: '640',
              height: '480',
            },
          ],
          type: 'photo',
          name: 'Play this for 1 min and see why everyone is addicted!',
          created: 'Wed, 07 Nov 2018 07:48:03 UTC',
          branding: 'Vikings: Free Online Game',
          duration: '0',
          categories: ['entertainment'],
          views: '0',
          id:
            '~~V1~~-5896381141921895298~~dLS-JHiOwvc3JaQ8X48v4tqk9InTYB5FRjEZjFa6vikgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5mt7edQ6zoqdpv903LR4BWpzb1UUjkFNyhu-IeNM1dcRMY0F_q0d7ADvDX1gWqO3ap6TtnHhAckUe1t211R_L7mPF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E-5896381141921895298%7E%7EdLS-JHiOwvc3JaQ8X48v4tqk9InTYB5FRjEZjFa6vikgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5mt7edQ6zoqdpv903LR4BWpzb1UUjkFNyhu-IeNM1dcRMY0F_q0d7ADvDX1gWqO3ap6TtnHhAckUe1t211R_L7mPF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg&item.type=photo&sig=d5385fd28389d029492fe90fd8e71564f778095dc372&redir=https%3A%2F%2Fplarium.com%2Flandings%2Fen%2Fvikings%2Fvillage_steps_m_prelp001_2%3FpublisherID%3D136633172%26placement%3Dapitestaccount%26adpartnerset%3D1145451%26plid%3D120258%26pxl%3Dtaboola_fr',
        },
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2F4ecfb35c6ff80464acad0f7590c551d1.jpg',
              width: '640',
              height: '480',
            },
          ],
          type: 'video',
          name: '3 Tips To Keep Your Cat Happier Indoors',
          created: 'Fri, 07 Dec 2018 00:02:45 UTC',
          branding: 'Dr. Marty',
          duration: '0',
          categories: ['pets'],
          views: '0',
          id:
            '~~V1~~-7042463544641522180~~H3pzqWZvSrWlTC07xw6bBACJu5JhZJqpzZIZQ6DKbxUgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5r857MQn9J5LVdWytea-PDJzb1UUjkFNyhu-IeNM1dcRs1olvHIXrlJHA2ulZ27i2BhYNi1FhrNyvHSxZHMu7q-PF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E-7042463544641522180%7E%7EH3pzqWZvSrWlTC07xw6bBACJu5JhZJqpzZIZQ6DKbxUgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5r857MQn9J5LVdWytea-PDJzb1UUjkFNyhu-IeNM1dcRs1olvHIXrlJHA2ulZ27i2BhYNi1FhrNyvHSxZHMu7q-PF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg&item.type=video&sig=eef231b3a2e004aa89857a6d84ed85c7234ccea825a6&redir=http%3A%2F%2Fdrmartypets.com%2Fcmd.php%3Fad%3D899347%26utm_source%3Dtaboola%26utm_medium%3Dreferral',
        },
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fbackoffice.wazimo.com%2Fengine%2Fstatic%2FcampaignGroupManager%2Fbanners%2Fbig-bang-relationships%2F300_250%2F12956.jpg',
              width: '640',
              height: '480',
            },
          ],
          description:
            'The Real Life Partners of The Big Bang Theory Stars - Since The Big Bang Theory first debuted on CBS in September 2007, the sitcom has been a smash hit garnering millions of fans. Over the years, nerds of all walks of life have cheered at the television phenomena as the cast of geeks have charmed th',
          type: 'photo',
          name:
            'The Big Bang Theory Stars Finally Show Their Real Life Partners.',
          created: 'Sun, 18 Nov 2018 11:20:47 UTC',
          branding: 'Joorala',
          duration: '0',
          categories: ['entertainment', 'olivia'],
          views: '0',
          id:
            '~~V1~~271654086396141611~~Je0JlcC8DanrQdJGcXhkOT3jULFZk4h9IlRJOu35qysgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5v9Xkm0139tEO6Qib8QV3Exzb1UUjkFNyhu-IeNM1dcRHYhY50PCdoUlKDc1fD5Mnm9EHoLj9R7qz7lU62yNL64dZZ0aEgfYDhs17TmkBktH',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E271654086396141611%7E%7EJe0JlcC8DanrQdJGcXhkOT3jULFZk4h9IlRJOu35qysgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5v9Xkm0139tEO6Qib8QV3Exzb1UUjkFNyhu-IeNM1dcRHYhY50PCdoUlKDc1fD5Mnm9EHoLj9R7qz7lU62yNL64dZZ0aEgfYDhs17TmkBktH&item.type=photo&sig=bb5a600f94547b83edd6a6beb5c2b5f001791fcf0831&redir=https%3A%2F%2Fwww.joorala.com%2Fview%2Fbig-bang-relationships-jo%2F%3Fsrc%3Dtaboola%26utm_source%3Dtaboola%26utm_medium%3Dapitestaccount%26utm_campaign%3D1378508%26utm_key%3D220%26utm_term%3DJO_D_US_big-bang-relationships-jo_gil_3148_SAFE-FOR-MSN',
        },
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2F6543d4428e22fe989d2d5d4283bd374f.jpg',
              width: '640',
              height: '480',
            },
          ],
          description:
            'There Is no doubt that the kids that go to the same schools as celebrity kids get jealous. On the one hand, things are easier for celebrity kids because their parents have the money to support them without worrying about a home mortgage or debts. On the other hand, the constant attention and stress ',
          type: 'photo',
          name:
            "Sandra Bullock's Son Is Grown Up And Might Look Familiar To You",
          created: 'Mon, 05 Mar 2018 13:37:02 UTC',
          branding: 'Cash Roadster',
          duration: '0',
          categories: ['gossip'],
          views: '0',
          id:
            '~~V1~~5924526099847965997~~RjsvSKIRpuNmZGpN6wVFbFtnTwGHCaRy8R2UrVqJZPkgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5oPhqZHIniJKxdt9UCaV5zdzb1UUjkFNyhu-IeNM1dcR3VH19Yoomxrty6sT-aP-czoCciNPDIAO7_wsBkK24SkdZZ0aEgfYDhs17TmkBktH',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E5924526099847965997%7E%7ERjsvSKIRpuNmZGpN6wVFbFtnTwGHCaRy8R2UrVqJZPkgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5oPhqZHIniJKxdt9UCaV5zdzb1UUjkFNyhu-IeNM1dcR3VH19Yoomxrty6sT-aP-czoCciNPDIAO7_wsBkK24SkdZZ0aEgfYDhs17TmkBktH&item.type=photo&sig=009c3536636761c0cede7641429dc813eeeb9c6b0815&redir=http%3A%2F%2Fcashroadster.com%2Ffinancial-advisor%2Fceleb-kids-all-grown-up-they-are-fixed-for-life-thanks-to-huge-trust-funds-invested-for-them-by-their-famous-parents%3Futm_source%3Dtaboola%26utm_medium%3Dapitestaccount%26utm_campaign%3D1282298%26utm_term%3DSandra%2BBullock%2527s%2BSon%2BIs%2BGrown%2BUp%2BAnd%2BMight%2BLook%2BFamiliar%2BTo%2BYou%26utm_content%3Dhttp%253A%252F%252Fcdn.taboola.com%252Flibtrc%252Fstatic%252Fthumbnails%252F6543d4428e22fe989d2d5d4283bd374f.jpg%26id%3D2018-12-10%2B17%253A51%253A20',
        },
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fgleaned-images.stuff.com%2Fsignals-test%2F206f7022bd18227cf8b88fdee35197e9746db13a24de957b58c3fd32',
              width: '640',
              height: '480',
            },
          ],
          description:
            "You need a classic car that fits your driving style! Which one will it be? Answer our questions, and we'll tell you.",
          type: 'photo',
          name: 'Quiz: What classic car should you drive?',
          created: 'Mon, 24 Sep 2018 17:13:58 UTC',
          branding: 'HowStuffWorks.com',
          duration: '0',
          categories: ['autos'],
          views: '0',
          id:
            '~~V1~~-5276186091077000159~~Y3eTyf2fJa5kwP3v0ACyT988cvFJPVtFu2HETMNid-UgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5mZdD01__Pk6yBQE_oY0zRxzb1UUjkFNyhu-IeNM1dcRN2-QrAB1ERsoMqsdCGEiLqKC4JjTyj8X4JFT5Nqu9gyPF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E-5276186091077000159%7E%7EY3eTyf2fJa5kwP3v0ACyT988cvFJPVtFu2HETMNid-UgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5mZdD01__Pk6yBQE_oY0zRxzb1UUjkFNyhu-IeNM1dcRN2-QrAB1ERsoMqsdCGEiLqKC4JjTyj8X4JFT5Nqu9gyPF8C2yPvlmbo_NIFLjI3Jnzoe8e4p5itBefwz-8gjjg&item.type=photo&sig=42240b4c0cff8724997d25885d2e1564d9df996afdb1&redir=https%3A%2F%2Fplay.howstuffworks.com%2Fquiz%2Fwhat-classic-car-are-you-meant-drive%3Facct%3Dzoocom-sc%26utm_medium%3Dpaid%26utm_source%3Dtaboola%26utm_campaign%3D1547893%26utm_term%3Dapitestaccount%26utm_content%3DQuiz%253A%2BWhat%2Bclassic%2Bcar%2Bshould%2Byou%2Bdrive%253F%26adid%3D136997624%26img%3Dhttp%253A%252F%252Fgleaned-images.stuff.com%252Fsignals-test%252F206f7022bd18227cf8b88fdee35197e9746db13a24de957b58c3fd32%26mkcpgn%3Dda0fd43342434438afe1444a4a7ce66f%26sg_uid%3Dda0fd43342434438afe1444a4a7ce66f',
        },
        {
          thumbnail: [
            {
              url:
                'https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_480%2Cw_640%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Fstatic%2F38%2F386d6e9b-87b1-425b-b707-d847dbb8ea32.jpg',
              width: '640',
              height: '480',
            },
          ],
          description:
            'Unlock your Future Career Join AMP AMP is an online tool and mentorship program to help you become a competitive applicant for a future career in healthcare. When you join, you unlock these benefits that help you AMP up your applications:   Membership in a select, national honors program for the nex',
          type: 'text',
          name: 'Is Your Child Interested in the Medical Field? Check out AMP',
          created: 'Tue, 27 Nov 2018 17:01:34 UTC',
          branding: 'American Medical Pathway Honors Program',
          duration: '0',
          categories: ['education'],
          views: '0',
          id:
            '~~V1~~-6869520848258395151~~-4M3uKsJbWpF9Biv3mT9sjocNjEoUVw713sr8cItAaEgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5lVo0JYo5UaJWa6Sw7BYhy9zb1UUjkFNyhu-IeNM1dcRh09UIK-J2ueuFDhcDCRrdGGsNxExoTcFKE3EgwUdimodZZ0aEgfYDhs17TmkBktH',
          origin: 'sponsored',
          url:
            'https://api.taboola.com/1.2/json/apitestaccount/recommendations.notify-click?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&response.id=__0ba7ba179ae51ee33080420a8c20b117__79853f91a2c97ea7307481afd76a135d&response.session=v2_a45ba801ce873b439c615cbf29f76547_3791400e-42ee-4bcd-bb4c-354d573c74da-tuct2b40ea2_1544464279_1544464279_CNawjgYQj8BGGJfT-sn5LCABKAMw4QE4kaQOQJ_uDkjn-RlQ-gNYAGDlEg&item.id=%7E%7EV1%7E%7E-6869520848258395151%7E%7E-4M3uKsJbWpF9Biv3mT9sjocNjEoUVw713sr8cItAaEgADLX0sCLI84lvxeYoNVBXtEiVLHvk6BFwXvQihx-5lVo0JYo5UaJWa6Sw7BYhy9zb1UUjkFNyhu-IeNM1dcRh09UIK-J2ueuFDhcDCRrdGGsNxExoTcFKE3EgwUdimodZZ0aEgfYDhs17TmkBktH&item.type=text&sig=99380beaa1f892c52d2ae86b69e1ef3848fb06854627&redir=https%3A%2F%2Fwww.amphonorsprogram.com%2Fwelcome%2F%3Futm_source%3Dtab%26utm_medium%3Dom%26utm_campaign%3Ddbtamppilot',
        },
      ],
    };
  }

  async componentDidMount() {
    // const res = await axios.get(
    //   'api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&amp;app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&amp;source.id=%2Fdigiday-publishing-summit%2F&amp;source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&amp;source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&amp;placement.rec-count=6&amp;placement.name=Below%20Article%20Thumbnails&amp;placement.thumbnail.width=640&amp;placement.thumbnail.height=480&amp;user.session=init'
    // );
    // const data = res.data;
    // const allEvents = data.list;
    // this.setState({ events: allEvents });
  }

  render() {
    const events = this.state.events || [];
    console.log('all events: ', events);

    return (
      <div className="main">
        <div className="header">
          <h4>More content you might be interested in:</h4>
        </div>
        <div className="events">
          {events.map(event => {
            return (
              <div className="event" key={event.id}>
                <Link to="www.espn.go.com">
                  <h4>{event.name}</h4>
                  <img src={event.thumbnail[0].url} className="thumbnail" />
                  <p>{event.branding}</p>
                  <p>
                    {event.categories.map(cat => {
                      return `#${cat} `;
                    })}
                  </p>
                  <br />
                </Link>
              </div>
            );
          })}
        </div>
        <h6>Sponsored Links by Taboola</h6>
      </div>
    );
  }
}
