import { getBoundsOfCoordinates, getCenterOfCoordinates } from '@/lib/mapbox'
import type { Position } from 'geojson'

export const routeCoordinates: Position[] = [
  [4.40368, 51.22108],
  [4.40396, 51.22109],
  [4.40435, 51.22113],
  [4.40461, 51.22124],
  [4.40476, 51.22133],
  [4.40516, 51.22126],
  [4.40507, 51.22144],
  [4.40506, 51.22168],
  [4.40503, 51.22181],
  [4.40594, 51.22183],
  [4.40646, 51.22179],
  [4.40679, 51.22174],
  [4.407960003938415, 51.221575005868687],
  [4.40913, 51.22141],
  [4.409324998159405, 51.221850000214737],
  [4.40952, 51.22229],
  [4.41033, 51.22222],
  [4.41118, 51.22211],
  [4.41111, 51.22198],
  [4.41082, 51.22173],
  [4.41117, 51.22162],
  [4.41167, 51.2215],
  [4.41265, 51.22127],
  [4.4126, 51.22125],
  [4.41208, 51.22051],
  [4.41197, 51.22034],
  [4.41155, 51.2204],
  [4.41144, 51.21991],
  [4.41133, 51.21947],
  [4.410295002223528, 51.21957500457831],
  [4.40926, 51.21968],
  [4.40921, 51.21961],
  [4.40838, 51.21911],
  [4.40824, 51.21899],
  [4.40815, 51.21886],
  [4.40802, 51.21838],
  [4.40799, 51.21812],
  [4.40688, 51.21817],
  [4.40579, 51.21829],
  [4.40539, 51.21836],
  [4.40504, 51.21847],
  [4.40446, 51.21858],
  [4.40442, 51.21849],
  [4.40428, 51.21847],
  [4.40391, 51.21834],
  [4.40368, 51.21831],
  [4.4037, 51.21791],
  [4.40374, 51.21775],
  [4.40383, 51.21762],
  [4.40397, 51.21747],
  [4.40402, 51.21739],
  [4.40356, 51.21738],
  [4.4032, 51.2174],
  [4.40265, 51.21748],
  [4.40251, 51.21749],
  [4.40242, 51.21752],
  [4.402495000768765, 51.217059999904997],
  [4.40257, 51.2166],
  [4.40259, 51.21656],
  [4.40252, 51.21653],
  [4.40163, 51.21653],
  [4.40148, 51.21652],
  [4.40138, 51.21648],
  [4.40161, 51.21622],
  [4.40145, 51.21617],
  [4.40127, 51.21616],
  [4.400415000977179, 51.216195003101497],
  [4.39956, 51.21623],
  [4.39935, 51.21629],
  [4.39926, 51.21633],
  [4.39919, 51.21638],
  [4.398495003350922, 51.216585001982573],
  [4.3978, 51.21679],
  [4.39731, 51.21695],
  [4.39747, 51.21715],
  [4.39747, 51.21714],
  [4.39793, 51.21759],
  [4.39825, 51.2182],
  [4.39825, 51.21831],
  [4.39881, 51.21823],
  [4.39912, 51.21818],
  [4.3991, 51.21831],
  [4.39924, 51.21834],
  [4.39942, 51.2189],
  [4.39952, 51.21904],
  [4.39911, 51.21918],
  [4.39938, 51.21952],
  [4.39993, 51.22],
  [4.40004, 51.22005],
  [4.39996, 51.22014],
  [4.40025, 51.22026],
  [4.40034, 51.22019],
  [4.4004, 51.22044],
  [4.40045, 51.22064],
  [4.40035, 51.22063],
  [4.40013, 51.22125],
  [4.40029, 51.22145],
  [4.39947, 51.22159],
  [4.39911, 51.22167],
  [4.39908, 51.22172],
  [4.39885, 51.22178],
  [4.39852, 51.22183],
  [4.39805, 51.2218],
  [4.39789, 51.22192],
  [4.39788, 51.22198],
  [4.39782, 51.22199],
  [4.39788, 51.22209],
  [4.39772, 51.22213],
  [4.39776, 51.22219],
  [4.39813, 51.22277],
  [4.39831, 51.22274],
  [4.39857, 51.22275],
  [4.39856, 51.22275],
  [4.39875, 51.22277],
  [4.39887, 51.22265],
  [4.39894, 51.22267],
  [4.39954, 51.22244],
  [4.39946, 51.22233],
  [4.39978, 51.22222],
  [4.40011, 51.22214],
  [4.40072, 51.22193],
  [4.40122, 51.22167],
  [4.40144, 51.22159],
  [4.40192, 51.2215],
  [4.40221, 51.22151],
  [4.40244, 51.22154],
  [4.40254, 51.22161],
  [4.40266, 51.22163],
  [4.40318, 51.22159],
  [4.40368, 51.22152],
  [4.40358, 51.22109],
  [4.40368, 51.22108],
]

export const routeCenter = getCenterOfCoordinates(routeCoordinates)
export const routeBounds = getBoundsOfCoordinates(routeCoordinates)

export const pointsBounds = [
  4.3917969777, 51.2097062525, 4.414775488, 51.2421193266,
]
