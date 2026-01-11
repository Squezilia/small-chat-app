export default defineAppConfig({
  navigation: {
    default: '',
    routes: {
      'Ana Sayfa': '/',
      Seriler: '/series',
      Fansublar: '/fansubs',
      Hakkımızda: '/about',
    },
  },
  emailRegex:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  passwordRegex:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/,
  nameRegex: /^[a-z ,.'-]+$/i,
});
