// List of Home-Assistant configuration for MQTT Discovery
// https://www.home-assistant.io/docs/mqtt/discovery/

module.exports = {
  // Binary sensor https://www.home-assistant.io/components/binary_sensor.mqtt
  'binary_sensor_occupancy': {
    type: 'binary_sensor',
    object_id: 'occupancy',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'motion'
    }
  },
  'binary_sensor_presence': {
    type: 'binary_sensor',
    object_id: 'presence',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'presence'
    }
  },
  'binary_sensor_contact': {
    type: 'binary_sensor',
    object_id: 'contact',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'door'
    }
  },
  'binary_sensor_lock': {
    type: 'binary_sensor',
    object_id: 'lock',
    discovery_payload: {
      payload_on: false,
      payload_off: true,
      value_template: '{{ value_json.value }}',
      device_class: 'lock'
    }
  },
  'binary_sensor_water_leak': {
    type: 'binary_sensor',
    object_id: 'water_leak',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'moisture'
    }
  },
  'binary_sensor_smoke': {
    type: 'binary_sensor',
    object_id: 'smoke',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'smoke'
    }
  },
  'binary_sensor_gas': {
    type: 'binary_sensor',
    object_id: 'gas',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'gas'
    }
  },
  'binary_sensor_carbon_monoxide': {
    type: 'binary_sensor',
    object_id: 'carbon_monoxide',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'safety'
    }
  },
  'binary_sensor_tamper': {
    type: 'binary_sensor',
    object_id: 'tamper',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'safety'
    }
  },
  'binary_sensor_alarm': {
    type: 'binary_sensor',
    object_id: 'alarm',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'problem'
    }
  },
  'binary_sensor_router': {
    type: 'binary_sensor',
    object_id: 'router',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value }}',
      device_class: 'connectivity'
    }
  },
  'binary_sensor_battery_low': {
    type: 'binary_sensor',
    object_id: 'battery_low',
    discovery_payload: {
      payload_on: true,
      payload_off: false,
      value_template: '{{ value_json.value}}',
      device_class: 'battery'
    }
  },

  // Sensor https://www.home-assistant.io/components/sensor.mqtt
  'sensor_generic': {
    type: 'sensor',
    object_id: 'generic',
    discovery_payload: {
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_alarm': {
    type: 'sensor',
    object_id: 'alarm',
    discovery_payload: {
      icon: 'mdi:alarm-light',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_illuminance': {
    type: 'sensor',
    object_id: 'illuminance',
    discovery_payload: {
      unit_of_measurement: 'lx',
      device_class: 'illuminance',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_humidity': {
    type: 'sensor',
    object_id: 'humidity',
    discovery_payload: {
      unit_of_measurement: '%',
      device_class: 'humidity',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_temperature': {
    type: 'sensor',
    object_id: 'temperature',
    discovery_payload: {
      unit_of_measurement: '°C',
      device_class: 'temperature',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_pressure': {
    type: 'sensor',
    object_id: 'pressure',
    discovery_payload: {
      unit_of_measurement: 'hPa',
      device_class: 'pressure',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_click': {
    type: 'sensor',
    object_id: 'click',
    discovery_payload: {
      icon: 'mdi:toggle-switch',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_angle': {
    type: 'sensor',
    object_id: 'angle',
    discovery_payload: {
      icon: 'mdi:angle-acute',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_electricity': {
    type: 'sensor',
    object_id: 'electricity',
    discovery_payload: {
      unit_of_measurement: 'Watt',
      icon: 'mdi:flash',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_speed': {
    type: 'sensor',
    object_id: 'speed',
    discovery_payload: {
      unit_of_measurement: 'Km/h',
      icon: 'mdi:speedometer',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_direction': {
    type: 'sensor',
    object_id: 'direction',
    discovery_payload: {
      unit_of_measurement: '°',
      icon: 'mdi:compass',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_sun': {
    type: 'sensor',
    object_id: 'sun',
    discovery_payload: {
      icon: 'mdi:white-balance-sunny',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_weight': {
    type: 'sensor',
    object_id: 'weight',
    discovery_payload: {
      icon: 'mdi:weight',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_co2': {
    type: 'sensor',
    object_id: 'co2',
    discovery_payload: {
      icon: 'mdi:periodic-table-co2',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_air': {
    type: 'sensor',
    object_id: 'air',
    discovery_payload: {
      icon: 'mdi:air-filter',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_sound': {
    type: 'sensor',
    object_id: 'sound',
    discovery_payload: {
      icon: 'mdi:volume-high',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_time': {
    type: 'sensor',
    object_id: 'time',
    discovery_payload: {
      icon: 'mdi:clock-outline',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_heart': {
    type: 'sensor',
    object_id: 'heart',
    discovery_payload: {
      icon: 'mdi:heart',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_action': {
    type: 'sensor',
    object_id: 'action',
    discovery_payload: {
      icon: 'mdi:gesture-double-tap',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_brightness': {
    type: 'sensor',
    object_id: 'brightness',
    discovery_payload: {
      unit_of_measurement: 'brightness',
      icon: 'mdi:brightness-5',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_lock': {
    type: 'sensor',
    object_id: 'lock',
    discovery_payload: {
      icon: 'mdi:lock',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_battery': {
    type: 'sensor',
    object_id: 'battery',
    discovery_payload: {
      unit_of_measurement: '%',
      device_class: 'battery',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_linkquality': {
    type: 'sensor',
    object_id: 'linkquality',
    discovery_payload: {
      unit_of_measurement: '-',
      value_template: '{{ value_json.value }}'
    }
  },
  'sensor_gas_density': {
    type: 'sensor',
    object_id: 'gas_density',
    discovery_payload: {
      value_template: '{{ value_json.value }}',
      icon: 'mdi:google-circles-communities'
    }
  },
  'sensor_water': {
    type: 'sensor',
    object_id: 'water',
    discovery_payload: {
      value_template: '{{ value_json.value }}',
      icon: 'mdi:water'
    }
  },
  'sensor_pulse': {
    type: 'sensor',
    object_id: 'pulse',
    discovery_payload: {
      value_template: '{{ value_json.value }}',
      icon: 'mdi:pulse'
    }
  },
  'sensor_cover': {
    type: 'sensor',
    object_id: 'cover',
    discovery_payload: {
      value_template: '{{ value_json.value }}',
      icon: 'mdi:view-array'
    }
  },

  // Light https://www.home-assistant.io/components/light.mqtt
  'light_rgb_switch': {
    type: 'light',
    object_id: 'rgb_switch',
    discovery_payload: {
      state_topic: true,
      command_topic: true,
      rgb_command_template: '{{ \'#%02x%02x%02x\' | format(blue, green, red)}}',
      rgb_command_topic: true,
      rgb_state_topic: true,
      rgb_value_template: '{{ value_json.value[1:3] | int(0, 16) }},{{ value_json.value[3:5] | int(0, 16) }},{{ value_json.value[5:7] | int(0, 16) }}'
    }
  },
  'light_rgb_dimmer': {
    type: 'light',
    object_id: 'rgb_dimmer',
    discovery_payload: {
      state_topic: true,
      command_topic: true,
      brightness_state_topic: true,
      brightness_command_topic: true,
      on_command_type: 'first',
      state_value_template: '{{ "off" if value_json.value == 0 else "on" }}',
      brightness_value_template: '{{ (value_json.value / 99 * 255) | round(0) }}',
      rgb_command_template: '{{ "#%02x%02x%02x" | format(blue, green, red)}}',
      rgb_command_topic: true,
      rgb_state_topic: true,
      rgb_value_template: '{{ value_json.value[1:3] | int(0, 16) }},{{ value_json.value[3:5] | int(0, 16) }},{{ value_json.value[5:7] | int(0, 16) }}'
    }
  },
  'light_dimmer': {
    type: 'light',
    object_id: 'dimmer',
    discovery_payload: {
      schema: 'template',
      brightness_template: '{{ (value_json.value / 99 * 255) | round(0) }}',
      state_topic: true,
      state_template: '{{ "off" if value_json.value == 0 else "on" }}',
      command_topic: true,
      command_on_template: '{{ ((brightness / 255 * 99) | round(0)) if brightness is defined else 255 }}',
      command_off_template: '0'
    }
  },

  // Switch https://www.home-assistant.io/components/switch.mqtt
  'switch': {
    type: 'switch',
    object_id: 'switch',
    discovery_payload: {
      payload_off: false,
      payload_on: true,
      value_template: '{{ value_json.value }}',
      command_topic: true
    }
  },

  // Cover https://www.home-assistant.io/components/cover.mqtt
  'cover': {
    type: 'cover',
    object_id: 'cover',
    discovery_payload: {
      command_topic: true,
      optimistic: true
    }
  },
  'cover_position': {
    type: 'cover',
    object_id: 'cover',
    discovery_payload: {
      command_topic: true,
      position_topic: true,
      set_position_topic: true,
      set_position_template: '{ "value": {{ position }} }',
      value_template: '{{ value_json.value }}',
      state_topic: false
    }
  },

  // Lock https://www.home-assistant.io/components/lock.mqtt
  'lock': {
    type: 'lock',
    object_id: 'lock',
    discovery_payload: {
      command_topic: true,
      payload_lock: 'true',
      payload_unlock: 'false',
      value_template: '{% if value_json.value == false %} false {% elif value_json.value == true %} true {% else %} unknown {% endif %}'
    }
  },

  // Thermostat/HVAC https://www.home-assistant.io/components/climate.mqtt
  'thermostat': {
    type: 'climate',
    object_id: 'climate',
    discovery_payload: {
      min_temp: 7,
      max_temp: 30,
      modes: ['off', 'auto', 'heat'],
      mode_state_topic: true,
      mode_state_template: '{{ value_json.mode }}',
      mode_command_topic: true,
      current_temperature_topic: true,
      current_temperature_template: '{{ value_json.value }}',
      temperature_state_topic: true,
      temperature_state_template: '{{ value_json.value }}',
      temperature_command_topic: true
    }
  },

  // Fan https://www.home-assistant.io/components/fan.mqtt/
  'fan': {
    type: 'fan',
    object_id: 'fan',
    discovery_payload: {
      state_topic: true,
      state_value_template: '{{ value_json.state }}',
      command_topic: true,
      command_topic_postfix: 'fan_state',
      speed_state_topic: true,
      speed_command_topic: true,
      speed_value_template: '{{ value_json.speed }}',
      speeds: ['off', 'low', 'medium', 'high', 'on', 'auto', 'smart']
    }
  },
  'sound_switch': {
    type: 'fan',
    object_id: 'sound_switch',
    discovery_payload: {
      command_topic: true,
      speed_command_topic: true,
      speed_state_topic: true,
      state_topic: true,
      speeds: ['off', 'low', 'medium', 'high'],
      payload_low_speed: 10,
      payload_medium_speed: 25,
      payload_high_speed: 50,
      payload_off: 0,
      payload_on: 25,
      state_value_template: '{{ value_json.value | int }}',
      speed_value_template: '{{ value_json.value | int }}'
    }
  }
}
