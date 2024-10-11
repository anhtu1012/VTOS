"use client";
import LayoutContent from "@/components/layoutContent";
import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import "./index.scss";
export default function InformationShip() {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    const isTouched = form.isFieldsTouched(true);
    setIsFormValid(!hasErrors && isTouched);
  };

  return (
    <>
      {" "}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5DC9EF",
            colorBgHeader: "#5DC9EF",
          },
          components: {
            Radio: {
              colorBgContainer: "#e8f7fd",
              colorBorder: "#5DC9EF",
            },
          },
        }}
      >
        <LayoutContent
          layoutType={1}
          content1={
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              className="antd-form"
              onValuesChange={handleFormChange}
            >
              <p className="antd-form__firstLabel">Thông tin tàu</p>
              <section className="antd-form__keyShip">
                <Form.Item
                  className="antd-form__item"
                  required={false}
                  id="shipCode"
                  label="Mã tàu"
                  name="shipCode"
                  rules={[{ required: true, message: "Vui lòng chọn mã tàu" }]}
                >
                  <Select
                    placeholder="Chọn mã tàu"
                    style={{ marginBottom: "12px" }}
                  >
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="antd-form__item"
                  required={false}
                  id="shipName"
                  label="Tên tàu"
                  name="shipName"
                  rules={[{ required: true, message: "Vui lòng nhập tên tàu" }]}
                >
                  <Input placeholder="Nhập tên tàu" />
                </Form.Item>
              </section>
              <section>
                <Row gutter={24}>
                  {/* section left 1 */}
                  <Col className="px-3" span={12}>
                    <Divider style={{  borderColor: '#808080' }} orientation="left" orientationMargin="0">
                      Thông tin chung
                    </Divider>
                    <Row gutter={25}>
                      <Col span={12}>
                        <Form.Item
                          id="shipType"
                          className="antd-form__item"
                          required={false}
                          label="Vessel Type"
                          name="shipType"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng chọn loại tàu",
                            },
                          ]}
                        >
                          <Select placeholder="Chọn loại tàu">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="inmarsat"
                          label="Inmarsat"
                          name="inmarsat"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Inmarsat",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập inmarsat" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="shippingLine"
                          label="Shipping Line"
                          name="shippingLine"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng chọn đường vận chuyển",
                            },
                          ]}
                        >
                          <Select placeholder="Chọn đường vận chuyển">
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="lloyd"
                          label="Lloyd"
                          name="lloyd"
                          rules={[
                            { required: true, message: "Vui lòng nhập Lloyd" },
                          ]}
                        >
                          <Input placeholder="Nhập Lloyd" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="nationCD"
                          label="Nation CD"
                          name="nationCD"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Nation CD",
                            },
                          ]}
                        >
                          <Select placeholder="Chọn nation CD">
                            <Select.Option value="demo">KR</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="callIMO"
                          label="Call IMO"
                          name="callIMO"
                          rules={[
                            { required: true, message: "Vui lòng chọn IMO" },
                          ]}
                        >
                          <Input placeholder="Nhập IMO" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="callSign"
                          label="Call Sign"
                          name="callSign"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập call sign",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Call Sign" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>

                  {/* section right 1 */}
                  <Col className="px-3" span={12}>
                    <Divider style={{  borderColor: '#808080' }} orientation="left" orientationMargin="0">
                      Sức chứa
                    </Divider>
                    <Row gutter={25}>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="maxTue"
                          label="Max. TUE"
                          name="maxTue"
                          rules={[
                            { required: true, message: "Vui lòng nhập maxTue" },
                          ]}
                        >
                          <Input placeholder="Nhập Max. TUE (TEU)" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="maxDeck"
                          label="Max. Row of Deck"
                          name="maxDeck"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Max. Row of Deck",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Max. TUE (TEU)" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="summerDraft"
                          label="Summer Draft"
                          name="summerDraft"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập summer draft",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Summer Draft" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="maxHold"
                          label="Max. Row of Hold"
                          name="maxHold"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Max. Row of Hold",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Max. Row of Hold" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="grt"
                          label="GRT"
                          name="grt"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập grt",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập GRT" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="topTier"
                          label="Top Tier Height"
                          name="topTier"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập top tier height",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Top Tier Height" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="dwt"
                          label="DWT"
                          name="dwt"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập dwt",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập DWT" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="maxDefine"
                          label="Max. Row Define"
                          name="maxDefine"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Max. Row Define",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Max. Row Define" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </section>

              <section>
                <Row gutter={24}>
                  {/* section left 2 */}
                  <Col className="px-3" span={12}>
                    <Divider style={{  borderColor: '#808080' }} orientation="left" orientationMargin="0">
                      Kích thước
                    </Divider>
                    <Row gutter={25}>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="loa"
                          label="LOA"
                          name="loa"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập loa",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập LOA (M)" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="antennaHeight"
                          label="Antenna Height"
                          name="antennaHeight"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập Antenna Height",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Antenna Height (M)" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="lob"
                          label="LOB"
                          name="lob"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập lob",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập LOB (M)" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="depth"
                          label="Depth"
                          name="depth"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập depth",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Depth" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className="antd-form__item"
                          required={false}
                          id="maxBeam"
                          label="Max Beam"
                          name="maxBeam"
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập max beam",
                            },
                          ]}
                        >
                          <Input placeholder="Nhập Max Beam" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>

                  {/* section right 2 */}
                  <Col className="px-3" span={12}>
                    <Divider style={{  borderColor: '#808080' }} orientation="left" orientationMargin="0">
                      Làm tròn giờ dịch vụ
                    </Divider>
                    <Form.Item
                      className="antd-form__item"
                      required={false}
                      label="Radio"
                    >
                      <Radio.Group defaultValue={"0H"}>
                        <Radio id="0h" value="0H">
                          0 H
                        </Radio>
                        <Radio id="0.5h" value="0.5H">
                          0.5 H
                        </Radio>
                        <Radio id="1h" value="1H">
                          1 H
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Ghi chú">
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </section>
              <div className="antd-form__save">
                <Button
                  // className="!border-none !w-[103px] !h[40px] !text-white !font-semibold !text-lg"
                  onClick={() => {
                    form.submit();
                  }}
                  disabled={!isFormValid}
                >
                  <span>
                    <SaveOutlined />
                  </span>
                  Lưu
                </Button>
              </div>
            </Form>
          }
        />
      </ConfigProvider>
    </>
  );
}
